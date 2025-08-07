import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ShoppingCart.css'; // You'll need to create this CSS file based on your existing styles

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [temporaryTotal, setTemporaryTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedItemCount, setSelectedItemCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [appliedCoupons, setAppliedCoupons] = useState([]);
  const [activeDiscountCoupon, setActiveDiscountCoupon] = useState(null);
  const [showAppliedVouchers, setShowAppliedVouchers] = useState(false);

  // Define coupons
  const coupons = [
    { id: "WELCOME100K", code: "WELCOME100K", type: "FIXED_AMOUNT", value: 100000, minPurchase: 300000, description: "Giảm 100.000đ cho đơn hàng từ 300.000đ" },
    { id: "VOUCHER200K", code: "VOUCHER200K", type: "FIXED_AMOUNT", value: 200000, minPurchase: 500000, description: "Giảm 200.000đ cho đơn hàng từ 500.000đ" },
  ];

  useEffect(() => {
    // Hàm thay đổi margin cho thẻ footer dựa trên kích thước màn hình
    const adjustFooterMargin = () => {
      const footerElement = document.querySelector('footer'); // Chọn thẻ footer
      if (footerElement) {
        if (window.innerWidth < 768) {
          footerElement.style.marginBottom = '8.5rem';
        } else if(window.innerWidth > 768) {
          footerElement.style.marginBottom = '12.8rem';
        }
      }
    }

    // Gọi hàm ngay khi component mount
    adjustFooterMargin();

    // Thêm event listener cho sự kiện resize
    window.addEventListener('resize', adjustFooterMargin);

    // Clean up khi component unmount
    return () => {
      window.removeEventListener('resize', adjustFooterMargin);
      // Reset về giá trị ban đầu khi unmount:
      const footerElement = document.querySelector('footer');
      if (footerElement) {
        footerElement.style.marginBottom = '';
      }
    };
  }, [])

  // Load cart items from sessionStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    // Filter only items added to cart (not "buy now" items)
    const cartOnlyItems = savedCart.filter(item => !item.action || item.action === 'addToCart');
    
    // Initialize checked state for all items
    const itemsWithCheckedState = cartOnlyItems.map(item => ({
      ...item,
      checked: true
    }));
    
    setCartItems(itemsWithCheckedState);
  }, []);

  // Update totals whenever cart items or their checked state changes
  useEffect(() => {
    updateCartTotals();
  }, [cartItems, appliedCoupons]);

  // Handle select all checkbox
  useEffect(() => {
    const allChecked = cartItems.length > 0 && cartItems.every(item => item.checked);
    setSelectAll(allChecked);
  }, [cartItems]);

  // Format price with thousand separators
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Get current subtotal of checked items
  const getCurrentSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      return item.checked ? sum + (parseInt(item.price) * item.quantity) : sum;
    }, 0);
  };

  // Update cart totals
  const updateCartTotals = () => {
    validateAppliedCoupons();

    const subtotal = getCurrentSubtotal();
    const count = cartItems.filter(item => item.checked).length;
    
    const productDiscount = activeDiscountCoupon ? activeDiscountCoupon.value : 0;
    const calculatedTotal = Math.max(0, subtotal - productDiscount);
    
    setTemporaryTotal(subtotal);
    setDiscount(productDiscount);
    setTotal(calculatedTotal);
    setSelectedItemCount(count);
  };

  // Handle quantity change
  const handleQuantityChange = (index, newValue) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(1, Math.min(99, newValue));
    setCartItems(updatedCart);
    
    // Update sessionStorage
    const allStoredItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const updatedStoredItems = allStoredItems.map(item => {
      if (item.uniqueId === updatedCart[index].uniqueId) {
        return {...item, quantity: updatedCart[index].quantity};
      }
      return item;
    });
    sessionStorage.setItem('cart', JSON.stringify(updatedStoredItems));
  };

  // Handle item checkbox change
  const handleCheckboxChange = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].checked = !updatedCart[index].checked;
    setCartItems(updatedCart);
  };

  // Handle select all checkbox change
  const handleSelectAllChange = () => {
    const newSelectAll = !selectAll;
    const updatedCart = cartItems.map(item => ({
      ...item,
      checked: newSelectAll
    }));
    setCartItems(updatedCart);
    setSelectAll(newSelectAll);
  };

  // Remove item from cart
  const removeItem = (index) => {
    const itemToRemove = cartItems[index];
    const updatedCart = cartItems.filter((_, idx) => idx !== index);
    setCartItems(updatedCart);
    
    // Update sessionStorage
    const allStoredItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    const updatedStoredItems = allStoredItems.filter(item => item.uniqueId !== itemToRemove.uniqueId);
    sessionStorage.setItem('cart', JSON.stringify(updatedStoredItems));
  };

  // Clear cart
  const clearCart = () => {
    // Get all stored items
    const allStoredItems = JSON.parse(sessionStorage.getItem('cart')) || [];
    // Filter out items that were added to cart
    const nonCartItems = allStoredItems.filter(item => item.action && item.action !== 'addToCart');
    
    // Update state and sessionStorage
    setCartItems([]);
    sessionStorage.setItem('cart', JSON.stringify(nonCartItems));
  };

  // Validate applied coupons
  const validateAppliedCoupons = () => {
    const subtotal = getCurrentSubtotal();
    
    if (activeDiscountCoupon && subtotal < activeDiscountCoupon.minPurchase) {
      const index = appliedCoupons.indexOf(activeDiscountCoupon.code);
      if (index > -1) {
        const newAppliedCoupons = [...appliedCoupons];
        newAppliedCoupons.splice(index, 1);
        setAppliedCoupons(newAppliedCoupons);
      }
      setActiveDiscountCoupon(null);
      alert(`Mã "${activeDiscountCoupon.code}" đã bị hủy do tổng giá trị đơn hàng dưới ${formatPrice(activeDiscountCoupon.minPurchase)}đ`);
    }
  };

  // Apply coupon
  const applyCoupon = (code) => {
    const coupon = coupons.find(c => c.code === code);
    if (!coupon || appliedCoupons.includes(code)) return;

    const subtotal = getCurrentSubtotal();

    if (coupon.type === "FIXED_AMOUNT") {
      if (subtotal < coupon.minPurchase) {
        alert(`Đơn hàng tối thiểu ${formatPrice(coupon.minPurchase)}đ để áp dụng mã này`);
        return;
      }
      
      // If there's already a discount coupon, remove it first
      if (activeDiscountCoupon) {
        const oldCouponIndex = appliedCoupons.indexOf(activeDiscountCoupon.code);
        if (oldCouponIndex > -1) {
          const newAppliedCoupons = [...appliedCoupons];
          newAppliedCoupons.splice(oldCouponIndex, 1);
          setAppliedCoupons(newAppliedCoupons);
        }
      }
      
      setActiveDiscountCoupon(coupon);
      setAppliedCoupons([...appliedCoupons, coupon.code]);
    }

    setShowModal(false);
  };

  // Remove coupon
  const removeCoupon = (code) => {
    const index = appliedCoupons.indexOf(code);
    if (index === -1) return;

    const coupon = coupons.find(c => c.code === code);
    if (coupon.type === "FIXED_AMOUNT") {
      setActiveDiscountCoupon(null);
    }

    const newAppliedCoupons = [...appliedCoupons];
    newAppliedCoupons.splice(index, 1);
    setAppliedCoupons(newAppliedCoupons);
  };

  // Group cart items by shop
  const groupedByShop = cartItems.reduce((groups, item) => {
    const shopName = item.shopName || 'Unknown Shop';
    if (!groups[shopName]) {
      groups[shopName] = [];
    }
    groups[shopName].push(item);
    return groups;
  }, {});

  // Render available coupons
  const renderAvailableCoupons = () => {
    const subtotal = getCurrentSubtotal();
    
    return coupons.map(coupon => {
      const isApplied = appliedCoupons.includes(coupon.code);
      const canApply = !isApplied;
      const isDisabled = coupon.type === "FIXED_AMOUNT" && subtotal < coupon.minPurchase;
      
      return (
        <div 
          key={coupon.code}
          className={`coupon-item ${isApplied ? 'selected' : ''} ${!canApply || isDisabled ? 'disabled' : ''}`}
          onClick={() => canApply && !isDisabled && applyCoupon(coupon.code)}
        >
          <div className="coupon-icon">🏷️</div>
          <div className="coupon-details">
            <div className="coupon-code">{coupon.code}</div>
            <div className="coupon-description">{coupon.description}</div>
            {coupon.minPurchase > 0 && (
              <div className="coupon-min-purchase">Đơn tối thiểu: {formatPrice(coupon.minPurchase)}đ</div>
            )}
          </div>
        </div>
      );
    });
  };

  // Handle checkout
  const handleCheckout = () => {
    // Add your checkout logic here
    // For example, navigate to checkout page
    navigate('/checkout');
  };

  // If cart is empty, show empty cart message
  if (cartItems.length === 0) {
    return (
      <div className="container2">
        <h1 className="page-title">Giỏ hàng của bạn</h1>
        <div className="cart-container">
          <div className="cart-items">
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <h3>Giỏ hàng của bạn đang trống</h3>
              <p>Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
              <Link to="/" className="checkout-btn">Tiếp tục mua sắm</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="container2">
      <h1 className="page-title">Giỏ hàng của bạn</h1>
      <div className="cart-actions1">
        <Link to="/" className="continue-shopping">
          <i>←</i> Tiếp tục mua sắm
        </Link>
        <button className="clear-cart" onClick={clearCart}>Xóa giỏ hàng</button>
      </div>
      
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-header">
            <input 
              type="checkbox" 
              className="cart-item-checkbox" 
              id="select-all" 
              checked={selectAll}
              onChange={handleSelectAllChange}
            />
            <div style={{ width: '5rem' }}>Sản phẩm</div>
            <div style={{ width: '13rem' }}>Thông tin</div>
            <div style={{ width: '3.7rem' }}>Đơn giá</div>
            <div style={{ width: '7.5rem' }}>Số lượng</div>
          </div>
          
          {/* Render grouped cart items by shop */}
          {Object.entries(groupedByShop).map(([shopName, items]) => (
            <div className="shop-item-group" key={shopName}>
              <div className="shop-header-mobile">
                <div className="shop-name-mobile"><i className="fa-solid fa-shop"></i>{shopName}</div>
                <button className="remove-items"><i className="fa fa-trash"></i></button>
              </div>
              
              {items.map((item, index) => {
                const itemIndex = cartItems.findIndex(cartItem => cartItem.uniqueId === item.uniqueId);
                return (
                  <div className="cart-item" key={item.uniqueId}>
                    <input 
                      type="checkbox" 
                      className="cart-item-checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckboxChange(itemIndex)}
                    />
                    <Link to={item.productLink || `/san-pham/${item.id}`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="cart-item-image"
                      />
                    </Link>
                    <div className="cart-item-details">
                      <Link to={item.productLink || `/san-pham/${item.id}`}>
                        <h3>{item.name}</h3>
                      </Link>
                      <div className="option">
                        {item.color && <span className="variant">Màu: {item.color}</span>}
                        {item.size && <span className="variant">Size: {item.size}</span>}
                      </div>
                      <p className="shop-name"><i className="fa-solid fa-shop"></i>{item.shopName}</p>
                    </div>
                    <div className="cart-item-price">
                      <span id="cart-price">{formatPrice(item.price)}</span>
                      {item.originalPrice && (
                        <span className="original-price">{formatPrice(item.originalPrice)}</span>
                      )}
                    </div>
                    <div className="quantity-control">
                      <button 
                        className="quantity-btn minus"
                        onClick={() => handleQuantityChange(itemIndex, item.quantity - 1)}
                      >-</button>
                      <input 
                        className="quantity-input"
                        value={item.quantity}
                        min="1"
                        max="99"
                        onChange={(e) => handleQuantityChange(itemIndex, parseInt(e.target.value))}
                      />
                      <button 
                        className="quantity-btn plus"
                        onClick={() => handleQuantityChange(itemIndex, item.quantity + 1)}
                      >+</button>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => removeItem(itemIndex)}
                    ><i className="fa fa-trash"></i></button>
                  </div>
                );
              })}
            </div>
          ))}
          
          <div className="cart-actions">
            <Link to="/" className="continue-shopping">
              <i>←</i> Tiếp tục mua sắm
            </Link>
            <button className="clear-cart" onClick={clearCart}>Xóa giỏ hàng</button>
          </div>
        </div>
        
        <div className="cart-summary">
          <h3>Tổng giỏ hàng</h3>
          
          <div className="summary-row">
            <span>Tạm tính</span>
            <span id="temporary-total">{formatPrice(temporaryTotal)}đ</span>
          </div>
          
          <div className="summary-row">
            <span>Giảm giá</span>
            <span id="discount-product">{discount > 0 ? `-${formatPrice(discount)}đ` : '0đ'}</span>
          </div>
          
          <div className="voucher-container">
            <div className="voucher-header">
              <div className="voucher-title">Mã giảm giá</div>
              <button className="voucher-button" onClick={() => setShowModal(true)}>Chọn mã</button>
            </div>
            
            <div className="voucher-summary" id="voucher-summary">
              <div 
                className="voucher-summary-header"
                onClick={() => setShowAppliedVouchers(!showAppliedVouchers)}
              >
                <span className="voucher-count">Voucher đã áp dụng ({appliedCoupons.length})</span>
                <span className="voucher-toggle-icon">{showAppliedVouchers ? '▲' : '▼'}</span>
              </div>
              
              {showAppliedVouchers && (
                <div className={`voucher-applied-list ${appliedCoupons.length > 0 ? 'expanded' : ''}`}>
                  {appliedCoupons.map(code => {
                    const coupon = coupons.find(c => c.code === code);
                    return (
                      <div className="voucher-item" key={code}>
                        <div className="voucher-item-info">
                          <div className="voucher-icon">🏷️</div>
                          <div className="voucher-details">
                            <div className="voucher-code">{coupon.code}</div>
                            <div className="voucher-description">{coupon.description}</div>
                          </div>
                        </div>
                        <button 
                          className="voucher-remove" 
                          onClick={() => removeCoupon(code)}
                        >×</button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div id="applied-coupons"></div>
          </div>
          
          <div className="summary-row total">
            <span>Tổng cộng<span id="selected-items-info">({selectedItemCount} sản phẩm)</span></span>
            <span id="total">{formatPrice(total)}đ</span>
          </div>
          
          <button className="checkout-btn" onClick={handleCheckout}>Tiến hành thanh toán</button>
          
          <div className="payment-methods">
            <p>Chấp nhận thanh toán</p>
            <div className="payment-icons">
              <div className="payment-icon">Visa</div>
              <div className="payment-icon">MC</div>
              <div className="payment-icon">Momo</div>
              <div className="payment-icon">VNPay</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Voucher Modal */}
      {showModal && (
        <div className="voucher-modal">
          <div className="voucher-modal-content">
            <div className="voucher-modal-header">
              <h3>Chọn mã giảm giá</h3>
              <span className="close-modal" onClick={() => setShowModal(false)}>&times;</span>
            </div>
            <div className="voucher-modal-body">
              <div className="available-coupons">
                {renderAvailableCoupons()}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ShoppingCart;