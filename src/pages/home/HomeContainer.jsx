import React, { useState, useEffect } from 'react';
import './HomeContainer.css';

function HomeContainer() {
  // Danh sách sản phẩm nổi bật (sau này sẽ thay thế bằng API)
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1fk9mibfck359.webp",
      name: "Áo thun nam phong cách Hàn Quốc Giày thể thao nam chạy bộ Giày thể thao nam chạy bộ",
      price: "299.000đ",
      originalPrice: null,
      discount: "-20%",
      rating: "★★★★☆"
    },
    {
      id: 2,
      image: "https://down-vn.img.susercontent.com/file/sg-11134301-7rd59-lvisasqiul9wcc.webp",
      name: "Váy liền thân thời trang công sở Túi xách nữ thời trang cao cấp",
      price: "499.000đ",
      originalPrice: null,
      discount: "Mới",
      rating: "★★★★★"
    },
    {
      id: 3,
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3iqepkwtjn960.webp",
      name: "Giày thể thao nam chạy bộ",
      price: "649.000đ",
      originalPrice: null,
      discount: "-19%",
      rating: "★★★★☆"
    },
    {
      id: 4,
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1l2mbiry4wj9c.webp",
      name: "Túi xách nữ thời trang cao cấp",
      price: "899.000đ",
      originalPrice: null,
      discount: null,
      rating: "★★★★★"
    }
  ]);
  // State cho countdown
  const [countdown, setCountdown] = useState({
    hours: 1,
    minutes: 27,
    seconds: 59
  });

  // Dữ liệu sản phẩm flash sale
  const flashSaleProducts = [
    {
      id: 1,
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1l2mbiry4wj9c.webp",
      discount: "-10%",
      price: "379.000",
      status: "ĐANG BÁN CHẠY",
      statusType: "hot-selling"
    },
    {
      id: 2,
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-liy168tjbx765a.webp",
      discount: "-10%",
      price: "884.700",
      status: "ĐÃ BÁN 13",
      statusType: "sold"
    },
    {
      id: 3,
      image: "https://down-vn.img.susercontent.com/file/sg-11134201-7rffg-m4aange9dimb18.webp",
      discount: "-26%",
      price: "201.000",
      status: "ĐANG BÁN CHẠY",
      statusType: "hot-selling"
    },
    {
      id: 4,
      image: "https://down-vn.img.susercontent.com/file/vn-11134201-7ra0g-m6qqffyl4prba1.webp",
      discount: "-5%",
      price: "722.000",
      status: "ĐANG BÁN CHẠY",
      statusType: "hot-selling"
    },
    {
      id: 5,
      image: "https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-m64rgn6a91qpe6.webp",
      discount: "-23%",
      price: "1.215.830",
      status: "ĐANG BÁN CHẠY",
      statusType: "hot-selling"
    },
    {
      id: 6,
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m129lj9085gfdf.webp",
      discount: "-54%",
      price: "113.900",
      status: "CHỈ CÒN 4",
      statusType: "limited"
    }
  ];

  // Logic countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevState => {
        const { hours, minutes, seconds } = prevState;
        
        if (seconds > 0) {
          return { ...prevState, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Xử lý scroll cho products container
  const scrollProducts = () => {
    const container = document.getElementById('productsContainer');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <main className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Mua sắm thông minh sống tiện nghi</h1>
          <p>Khám phá bộ sưu tập độc quyền với giá ưu đãi lên đến 50%</p>
          <a href="#" className="btn btn-primary">Mua ngay</a>
        </div>
        <div className="hero-image">
          <div className="sale-tag">
            <span className="sale-text">FLASH SALE</span>
            <span className="discount">-50%</span>
          </div>
          <img src="https://media.vneconomy.vn/images/upload/2021/12/14/nike.jpg" alt="Hero" />
        </div>
      </section>

      {/* Categories Section */}
      <section className="fade-in">
        <h2 className="section-title">Danh mục nổi bật</h2>
        <div className="categories">
        <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684@resize_w640_nl.webp" alt="Điện thoại" className="category-img" />
            <div className="category-name">Đồ chơi</div>
          </div>
          <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp" alt="Điện thoại" className="category-img" />
            <div className="category-name">Điện thoại</div>
          </div>
          <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d@resize_w640_nl.webp" alt="Laptop" className="category-img" />
            <div className="category-name">Laptop & Máy tính</div>
          </div>
          <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp" alt="Thời trang nam" className="category-img" />
            <div className="category-name">Thời trang nam</div>
          </div>
          <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d@resize_w640_nl.webp" alt="Thời trang nữ" className="category-img" />
            <div className="category-name">Thời trang nữ</div>
          </div>
          <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857@resize_w640_nl.webp" alt="Đồ gia dụng" className="category-img" />
            <div className="category-name">Đồ gia dụng</div>
          </div>
          <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de@resize_w640_nl.webp" alt="Đồ gia dụng" className="category-img" />
            <div className="category-name">Giày dép nam</div>
          </div>
          <div className="category-card">
            <img src="https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260@resize_w640_nl.webp" alt="Đồ gia dụng" className="category-img" />
            <div className="category-name">Đồng hồ</div>
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <div className="container1">
        <div className="flash-sale-header">
          <div className="flash-sale-title">
            <span className="lightning">⚡</span>
            <span className="title-text">FASH SALE</span>
            <div className="countdown">
              <div className="time-box">{countdown.hours.toString().padStart(2, '0')}</div>
              <span className="time-separator">:</span>
              <div className="time-box">{countdown.minutes.toString().padStart(2, '0')}</div>
              <span className="time-separator">:</span>
              <div className="time-box">{countdown.seconds.toString().padStart(2, '0')}</div>
            </div>
          </div>
          <a href="#" className="view-all">Xem tất cả &gt;</a>
        </div>

        <div className="products-container" id="productsContainer">
          {flashSaleProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img src={product.image} className="product-image1" alt="Product" />
                <div className="discount-label">{product.discount}</div>
                <div className="tag-container">
                  <div className="freeship-tag">FREESHIP</div>
                  <div className="discount-tag">GIẢM</div>
                </div>
              </div>
              <div className="product-price1">₫{product.price}</div>
              <div className={`status-bar ${product.statusType}`}>
                {product.statusType === 'limited' && <span className="fire-icon">🔥</span>}
                {product.status}
              </div>
            </div>
          ))}
          <button className="next-button" onClick={scrollProducts}>›</button>
        </div>
      </div>

      {/* Featured Products Section */}
      <h2 className="section-title">Sản phẩm nổi bật</h2>
      <section className="products">
        {featuredProducts.map(product => (
          <div key={product.id} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.discount && <span className="product-tag">{product.discount}</span>}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="product-price">
                <div>
                  <span className="price">{product.price}</span>
                  {product.originalPrice && <span className="original-price">{product.originalPrice}</span>}
                </div>
                <div className="rating">{product.rating}</div>
              </div>
              <div className="product-actions">
                <button className="add-to-cart">Thêm vào giỏ</button>
                <button className="wishlist">♡</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Promotion Banners */}
      <section className="promotion-banners fade-in">
        <div className="promo-banner">
          <img src="https://salt.tikicdn.com/cache/w750/ts/tikimsp/2e/0c/45/aa1dcd7b65d7d7a626cf03843803ac83.jpg.webp" alt="Khuyến mãi 1" className="promo-img" />
          <div className="promo-content">
            <h3 className="promo-title">Công Nghệ Giảm Sốc</h3>
            <p className="promo-subtitle">Ưu đãi lớn cho điện thoại và laptop mới nhất</p>
            <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Mua ngay</a>
          </div>
        </div>
        <div className="promo-banner">
          <img src="https://img.lazcdn.com/us/domino/474e65da5a6ed1a078c0e66e929d378b.png_2200x2200q80.png_.avif" alt="Khuyến mãi 2" className="promo-img" />
          <div className="promo-content">
            <h3 className="promo-title">Ưu đãi thanh toán</h3>
            <p className="promo-subtitle">Ưu đãi lớn khi mua mọi mặt hàng</p>
            <a href="#" className="btn btn-primary" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>Khám phá</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeContainer;