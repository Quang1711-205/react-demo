import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// Danh sách menu cho từng cột
const footerData = [
  {
    title: "Về ShopViet",
    links: [
      { name: "Giới thiệu", path: "/about" },
      { name: "Điều khoản sử dụng", path: "/terms" },
      { name: "Chính sách bảo mật", path: "/privacy" },
      { name: "Tin tức", path: "/news" },
      { name: "Liên hệ", path: "/contact" },
    ],
  },
  {
    title: "Hỗ trợ khách hàng",
    links: [
      { name: "Hướng dẫn mua hàng", path: "/help" },
      { name: "Phương thức thanh toán", path: "/payment" },
      { name: "Chính sách vận chuyển", path: "/shipping" },
      { name: "Chính sách đổi trả", path: "/return-policy" },
      { name: "Câu hỏi thường gặp", path: "/faq" },
    ],
  },
];

const contactInfo = [
  { icon: "fas fa-map-marker-alt", text: "Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội" },
  { icon: "fas fa-phone", text: "+84 987 654 321" },
  { icon: "fas fa-envelope", text: "hotro@shopviet.com" },
];

const socialLinks = [
  { icon: "fab fa-facebook-f", url: "https://facebook.com" },
  { icon: "fab fa-instagram", url: "https://instagram.com" },
  { icon: "fab fa-youtube", url: "https://youtube.com" },
  { icon: "fab fa-tiktok", url: "https://tiktok.com" },
];

// Component hiển thị một cột Footer
const FooterColumn = ({ title, links }) => (
  <div className="footer-column">
    <h3>{title}</h3>
    <ul className="footer-links">
      {links.map((link, index) => (
        <li key={index} className="footer-link">
          <Link to={link.path}>
            <i className="fas fa-chevron-right footer-link-icon"></i> {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Component hiển thị thông tin liên hệ
const ContactInfo = ({ icon, text }) => (
  <div className="contact-info">
    <i className={`${icon} contact-icon`}></i>
    <div>
      <p>{text}</p>
    </div>
  </div>
);

// Component Footer chính
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          {/* Hiển thị cột menu */}
          {footerData.map((item, index) => (
            <FooterColumn key={index} title={item.title} links={item.links} />
          ))}

          {/* Cột thông tin liên hệ */}
          <div className="footer-column">
            <h3>Thông tin liên hệ</h3>
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} icon={info.icon} text={info.text} />
            ))}
            {/* Mạng xã hội */}
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="social-link">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Cột đăng ký nhận tin */}
          <div className="footer-column">
            <h3>Đăng ký nhận tin</h3>
            <p>Đăng ký nhận thông tin khuyến mãi và cập nhật sản phẩm mới nhất từ ShopViet.</p>
            <form className="newsletter-form">
              <input type="email" className="newsletter-input" placeholder="Email của bạn" />
              <button type="submit" className="newsletter-button">Đăng ký</button>
            </form>
            <div style={{ marginTop: "20px" }}>
              <div style={{marginBottom: '8px'}}>Phương thức thanh toán</div>
              <img src="https://img.lazcdn.com/us/domino/c57d926d-e93f-4a59-ad9b-82083c0bc2ce_VN-64-64.png" alt="Phương thức thanh toán" style={{height: '39px', marginRight: '10px'}} />
              <img src="https://img.lazcdn.com/us/domino/d594365d-81d9-431e-b028-125d1a46d504_VN-64-64.png" alt="Phương thức thanh toán" style={{height: '39px', marginRight: '10px'}} />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1v7T287-ikP1m7dEUbs2n1SbbLEqkMd1ZA&s" alt="Phương thức thanh toán" style={{height: '39px', marginRight: '10px', borderRadius: '7px'}}/>
              <img src="https://img.lazcdn.com/us/domino/110408e5-c2da-4473-8da0-5181aee4d38f_VN-53-39.png" alt="Phương thức thanh toán" />
            </div>
          </div>
        </div>

        {/* Phần bản quyền */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ShopViet. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
