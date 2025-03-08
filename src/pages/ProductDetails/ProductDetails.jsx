import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCards from '../../component/common/ProductCard/ProductCard';
import { products } from '../data';
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('Đen');
  const [selectedSize, setSelectedSize] = useState('M');
  const [activeColorOption, setActiveColorOption] = useState(null);
  const [activeSizeOption, setActiveSizeOption] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [mainImageSrc, setMainImageSrc] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarAction, setSidebarAction] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for DOM elements
  const sidebarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const imageModalRef = useRef(null);
  const modalImageRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    console.log('FoundProduct:', foundProduct);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setProductCategory(foundProduct.category); // Lưu category thay vì mảng sản phẩm
      setSimilarProducts(foundProduct.category);
      // Set initial main image
      if (foundProduct.image) {
        setMainImageSrc(foundProduct.image);
      } else if (foundProduct.thumbnails && foundProduct.thumbnails.length > 0) {
        setMainImageSrc(foundProduct.thumbnails[0]);
      }

      // Set similar products based on category
      
      const similar = products.filter(
        (p) => p.id !== foundProduct.id && p.category === foundProduct.category
      ).slice(0, 4); 
      setSimilarProducts(similar);
      
      
      // Set initial color and size if available
      if (foundProduct.options?.colors?.length > 0) {
        const firstAvailableColor = foundProduct.options.colors.find(color => color.available);
        if (firstAvailableColor) {
          setActiveColorOption(firstAvailableColor.id);
          setSelectedColor(firstAvailableColor.name || firstAvailableColor.value);
        }
      }
      
      if (foundProduct.options?.sizes?.length > 0) {
        const firstAvailableSize = foundProduct.options.sizes.find(size => size.available);
        if (firstAvailableSize) {
          setActiveSizeOption(firstAvailableSize.id);
          setSelectedSize(firstAvailableSize.name);
        }
      }
    }
  }, [id]);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProductCategory(foundProduct.category);
    }
  }, [id]);

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      if (value < 1) {
        setQuantity(1);
      } else if (value > 10) {
        setQuantity(10);
      } else {
        setQuantity(value);
      }
    }
  };

  // Handle color selection
  const handleColorSelect = (colorId, colorName, available) => {
    if (!available) return;
    setActiveColorOption(colorId);
    setSelectedColor(colorName);
  };

  // Handle size selection
  const handleSizeSelect = (sizeId, sizeName, available) => {
    if (!available) return;
    setActiveSizeOption(sizeId);
    setSelectedSize(sizeName);
  };

  // Handle image gallery
  const handleThumbnailClick = (e, thumbnail) => {
    // Make sure we handle both direct clicks and bubbled events
    const thumbnailElement = e.target.closest('.thumbnail');
    if (!thumbnailElement) return;
    
    // Update main image with the thumbnail's image source
    const newImageSrc = thumbnailElement.getAttribute('data-image') || thumbnail;
    setMainImageSrc(newImageSrc);
  };

  const openImageModal = (src) => {
    setModalImageSrc(src);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
  };

  // Handle modal click to close when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target === imageModalRef.current) {
      closeImageModal();
    }
  };

  // Handle sidebar
  const showSidebar = (action) => {
    setSidebarAction(action);
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  // Handle add to cart or buy now
  const handleActionButtonClick = (action) => {
    // In a real app, this would add to cart or process purchase
    console.log(`Action: ${action}, Color: ${selectedColor}, Size: ${selectedSize}, Quantity: ${quantity}`);
    
    // For now, just show the sidebar
    showSidebar(action);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Render color options
  const renderColorOptions = (colors) => {
    if (!colors || colors.length === 0) return null;

    return (
      <div className="color-options">
        <div className="option-title">
          Màu sắc
          <span className="selected-option">Đã chọn: {selectedColor}</span>
        </div>
        <div className="colors">
          {colors.map((color) => (
            <div
              key={color.id}
              className={`color-option color-${color.value} ${activeColorOption === color.id ? 'active' : ''} ${color.available ? '' : 'disabled'}`}
              onClick={() => handleColorSelect(color.id, color.name || color.value, color.available)}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  // Render size options
  const renderSizeOptions = (sizes) => {
    if (!sizes || sizes.length === 0) return null;

    return (
      <div className="size-options">
        <div className="option-title">
          Kích thước
          <span className="selected-option">Đã chọn: {selectedSize}</span>
        </div>
        <div className="sizes">
          {sizes.map((size) => (
            <div
              key={size.id}
              className={`size-option ${activeSizeOption === size.id ? 'active' : ''} ${size.available ? '' : 'disabled'}`}
              onClick={() => handleSizeSelect(size.id, size.name, size.available)}
            >
              {size.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render sidebar content
  const renderSidebarContent = () => {
    return (
      <div className="sidebar-content" ref={sidebarContentRef}>
        <h3>Chọn tùy chọn</h3>
        {renderColorOptions(product.options.colors)}
        {renderSizeOptions(product.options.sizes)}
        <div className="quantity-selector">
          <span className="quantity-title">Số lượng:</span>
          <div className="quantity-controls">
            <button className="quantity-btn minus" onClick={decreaseQuantity}>
              <i className="fas fa-minus"></i>
            </button>
            <input 
              className="quantity-input" 
              value={quantity} 
              onChange={handleQuantityChange}
              min="1" 
              max="10" 
            />
            <button className="quantity-btn plus" onClick={increaseQuantity}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <button 
          className={`btn ${sidebarAction === 'addToCart' ? 'btn-primary1' : 'btn-buy-now1'}`}
          onClick={() => console.log(`Confirmed ${sidebarAction}: ${quantity} items of ${selectedColor} ${selectedSize}`)}
        >
          <i className={`fas ${sidebarAction === 'addToCart' ? 'fa-shopping-cart' : 'fa-bolt'} btn-icon`}></i>
          {sidebarAction === 'addToCart' ? 'Thêm vào giỏ hàng' : 'Mua ngay'}
        </button>
      </div>
    );
  };

  return (
    <main className="container">
      {/* Breadcrumb */}
      <ul className="breadcrumb">
        {product.breadcrumb.map((item, index) => (
          <React.Fragment key={index}>
            <li className="breadcrumb-item">
              {item.link ? <Link to={item.link}>{item.name}</Link> : item.name}
            </li>
            {index < product.breadcrumb.length - 1 && (
              <li className="breadcrumb-separator">
                <i className="fas fa-chevron-right"></i>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>

      {/* Product Detail */}
      <div className="product-detail">
        <div className="product-gallery">
          <div className="main-image">
            <span className="product-tag">{product.discount}</span>
            <button className="wishlist-button">
              <i className="far fa-heart"></i>
            </button>
            <img 
              src={mainImageSrc || product.image} 
              alt={product.name} 
              id="mainProductImage" 
              onClick={() => openImageModal(mainImageSrc || product.image)}
            />
          </div>
          <div className="thumbnails" id="thumbnailContainer">
            {product.thumbnails && product.thumbnails.map((thumbnail, index) => (
              <div 
                key={index} 
                className={`thumbnail ${mainImageSrc === thumbnail ? 'active' : ''}`} 
                data-image={thumbnail}
                onClick={(e) => handleThumbnailClick(e, thumbnail)}
              >
                <img src={thumbnail} alt={`${product.name} thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
          {/* Image Zoom Modal - Match HTML structure */}
          <div 
            id="imageModal" 
            className="image-modal" 
            ref={imageModalRef}
            onClick={handleModalClick}
            style={{ display: modalVisible ? 'flex' : 'none' }}
          >
            <div className="image-modal-content">
              <span className="image-modal-close" onClick={closeImageModal}>&times;</span>
              <img 
                id="modalImage" 
                src={modalImageSrc} 
                alt="Zoomed Product Image" 
                ref={modalImageRef}
              />
            </div>
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">
            <div className="rating-score">{product.rating}</div>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star${i < Math.floor(product.rating) ? '' : '-half-alt'}`}
                ></i>
              ))}
            </div>
            <div className="rating-count">
              <div className="rating-number">{product.reviewCount}</div>
              <div className="rating-evalue">Đánh Giá</div>
            </div>
          </div>
          <div className="product-price-container">
            <div className="product-price2">{product.price}</div>
            <div className="product-original-price">{product.originalPrice}</div>
            <div className="product-discount">{product.discount}</div>
          </div>
          <div className="product-status">
            <div className="status-item">
              <i className="fas fa-check-circle status-icon"></i>
              <span>Còn hàng</span>
            </div>
            <div className="status-item">
              <i className="fas fa-truck status-icon"></i>
              <span>Giao hàng miễn phí</span>
            </div>
            <div className="status-item">
              <i className="fas fa-sync-alt status-icon"></i>
              <span>Đổi trả trong 30 ngày</span>
            </div>
          </div>

          {/* Render màu sắc nếu có */}
          {renderColorOptions(product.options.colors)}

          {/* Render kích thước nếu có */}
          {renderSizeOptions(product.options.sizes)}

          {/* Phần số lượng */}
          <div className="quantity-selector">
            <span className="quantity-title">Số lượng:</span>
            <div className="quantity-controls">
              <button className="quantity-btn minus" onClick={decreaseQuantity}>
                <i className="fas fa-minus"></i>
              </button>
              <input 
                className="quantity-input" 
                value={quantity} 
                onChange={handleQuantityChange}
                min="1" 
                max="10" 
              />
              <button className="quantity-btn plus" onClick={increaseQuantity}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* Nút hành động - Fix class name to match HTML */}
          <div className="product-actions1">
            <button className="btn1 btn-primary1" onClick={() => handleActionButtonClick('addToCart')}>
              <i className="fas fa-shopping-cart btn-icon"></i>
              Thêm vào giỏ hàng
            </button>
            <button className="btn1 btn-buy-now1" onClick={() => handleActionButtonClick('buyNow')}>
              <i className="fas fa-bolt btn-icon"></i>
              Mua ngay
            </button>
          </div>
        </div>
      </div>

      {/* Seller Info */}
      <div className="seller-info">
        <div className="seller-left">
          <div className="seller-logo">
            <img src={product.seller.logo} alt={product.seller.name} className="seller-logo-img" />
          </div>
          <div className="seller-details">
            <div className="seller-name">{product.seller.name}</div>
            <div className="seller-status">Online {product.seller.lastOnline}</div>
            <div className="seller-actions">
              <button className="seller-btn chat">Chat Ngay</button>
              <button className="seller-btn view">Xem Shop</button>
            </div>
          </div>
        </div>
        <div className="seller-right">
          <div className="seller-metrics">
            {Object.entries(product.seller.metrics).map(([key, value]) => (
              <div key={key} className="metric">
                <span className="label">{key}</span>
                <span className="number">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="product-tabs">
        <div className="tabs-header">
          {['description', 'specs', 'guide', 'reviews'].map((tab) => (
            <div 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`} 
              data-tab={tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'description' && 'Mô tả chi tiết'}
              {tab === 'specs' && 'Thông số kỹ thuật'}
              {tab === 'guide' && 'Hướng dẫn sử dụng'}
              {tab === 'reviews' && `Đánh giá (${product.reviewCount})`}
            </div>
          ))}
        </div>
        <div className="tab-content" id="description" style={{ display: activeTab === 'description' ? 'block' : 'none' }}>
          <h3>Mô tả chi tiết sản phẩm</h3>
          <p>{product.details.description}</p>
        </div>
        <div className="tab-content" id="specs" style={{ display: activeTab === 'specs' ? 'block' : 'none' }}>
          <h3>Thông số kỹ thuật</h3>
          <div className="specs-list">
            {product.details.specifications.map((spec, index) => (
              <div key={index} className="spec-item">
                <span className="spec-label">{spec.label}:</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tab-content" id="guide" style={{ display: activeTab === 'guide' ? 'block' : 'none' }}>
          <h3>Hướng dẫn sử dụng</h3>
          <ul>
            {product.details.usageGuide.map((guide, index) => (
              <li key={index}>{guide}</li>
            ))}
          </ul>
        </div>
        <div className="tab-content" id="reviews" style={{ display: activeTab === 'reviews' ? 'block' : 'none' }}>
          <h3>Đánh giá sản phẩm</h3>
          <p>Hiện tại có {product.reviewCount} đánh giá từ khách hàng. Vui lòng để lại đánh giá của bạn!</p>
        </div>
      </div>

      {/* Similar Products */}
      <ProductCards products={similarProducts}/>

      {/* Responsive sidebar overlay - Only shows on mobile when sidebar is visible */}
      <div 
        className="sidebar-overlay" 
        style={{ display: (sidebarVisible && isMobile) ? 'block' : 'none' }} 
        onClick={hideSidebar}
      ></div>
      <div className={`sidebar ${sidebarVisible ? 'active' : ''}`} ref={sidebarRef}>
        {sidebarVisible && renderSidebarContent()}
      </div>
    </main>
  );
};

export default ProductDetail;