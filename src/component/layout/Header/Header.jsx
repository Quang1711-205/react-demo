import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import './Header.css';

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  
  // Get cart functionality from context
  const { getCartCount } = useCart();
  
  // Xử lý overflow body khi mobile nav active
  useEffect(() => {
    if (isMobileNavActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileNavActive]);
  
  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };
  
  const toggleMobileSearch = () => {
    setIsMobileSearchActive(!isMobileSearchActive);
  };
  
  const closeMobileNav = () => {
    setIsMobileNavActive(false);
  };
  
  // Danh sách menu để tái sử dụng cho cả desktop và mobile
  const menuItems = [
    { name: 'Trang chủ', link: '/' },
    { name: 'Sản phẩm mới', link: '/new-products' },
    { name: 'Khuyến mãi', link: '/promotions' },
    { name: 'Thời trang nam', link: '/mens-fashion' },
    { name: 'Thời trang nữ', link: '/womens-fashion' },
    { name: 'Phụ kiện', link: '/accessories' },
    { name: 'Thương hiệu', link: '/brands' },
    { name: 'Liên hệ', link: '/contact' },
    { name: 'Chính sách', link: '/policies' }
  ];
  
  return (
    <>
      <header>
        <div className="container">
          <div className="header-top">
            <button 
              className={`mobile-menu-toggle ${isMobileNavActive ? 'active' : ''}`} 
              onClick={toggleMobileNav}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <Link to="/" className="logo">
              <span className="logo-icon">🛍️</span>ShopViet
            </Link>
            
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Tìm kiếm sản phẩm, thương hiệu, danh mục..." />
              <button>Tìm</button>
            </div>
            
            <div className="header-actions">
              <button 
                className="search-toggle" 
                onClick={toggleMobileSearch}
                aria-label="Toggle mobile search"
              >
                🔍
              </button>
              
              <Link to="/account" className="header-action-btn">
                <span className="action-icon">👤</span>
                <span className="action-label">Tài khoản</span>
              </Link>
              
              <Link to="/wishlist" className="header-action-btn">
                <span className="action-icon">❤️</span>
                <span className="action-label">Yêu thích</span>
              </Link>
              
              <Link to="/cart" className="header-action-btn cart-icon">
                <span className="action-icon">🛒</span>
                <span className="action-label">Giỏ hàng</span>
                {getCartCount() > 0 && (
                  <span className="cart-count">{getCartCount()}</span>
                )}
              </Link>
            </div>
          </div>
          
          <div className={`mobile-search-bar ${isMobileSearchActive ? 'active' : ''}`}>
            <form className="mobile-search-form">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            </form>
          </div>
        </div>
        
        <nav>
          <div className="container">
            <ul className="nav-menu">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      
      {/* Mobile Navigation */}
      <div 
        className={`overlay ${isMobileNavActive ? 'active' : ''}`} 
        onClick={closeMobileNav}
      ></div>
      
      <div className={`mobile-nav ${isMobileNavActive ? 'active' : ''}`}>
        <div className="mobile-user-actions">
          <Link to="/account">
            <span className="action-icon">👤</span>
            <span>Tài khoản</span>
          </Link>
          <Link to="/wishlist">
            <span className="action-icon">❤️</span>
            <span>Yêu thích</span>
          </Link>
          <Link to="/cart">
            <span className="action-icon">🛒</span>
            <span>Giỏ hàng</span>
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </Link>
        </div>
        
        <ul className="mobile-nav-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} onClick={closeMobileNav}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;