import "../App.css";

function Footer() {
  return (
    <footer className="footer-section-main">
      <div className="footer-wrapper">
        <div className="footer-row">

          {/* CONTACT + AVATAR */}
          <div className="footer-col">
            <div className="contact-box">

              <div className="contact-avatar">
                <img src="/images/avt.jpg" alt="Avatar" />
              </div>

              <div className="contact-content">
                <h5>📞 LIÊN HỆ</h5>
                <p><strong>Địa chỉ:</strong> 123 Đường Pizza, TP. Đà Nẵng</p>
                <p><strong>Điện thoại:</strong> +84 (0) 708 091060</p>
                <p><strong>Email:</strong> info@pizzarestaurant.com</p>
                <p><strong>Giờ hoạt động:</strong></p>
                <p>Thứ 2 - Thứ 7: 10:00 - 23:00</p>
                <p>Chủ nhật: 11:00 - 22:00</p>
              </div>

            </div>
          </div>

          {/* ABOUT */}
          <div className="footer-col">
            <h5>🍕 PIZZA RESTAURANT</h5>
            <p>
              Chúng tôi cung cấp những chiếc pizza tươi ngon nhất với nguyên liệu
              chất lượng cao.
            </p>
            <div className="social-media">
              <a href="#">📱 Facebook</a>
              <a href="#">🐦 Twitter</a>
              <a href="#">📷 Instagram</a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h5>🔗 LIÊN KẾT NHANH</h5>
            <ul className="footer-list">
              <li><a href="#">Menu</a></li>
              <li><a href="#">Đặt bàn</a></li>
              <li><a href="#">Về chúng tôi</a></li>
              <li><a href="#">Chính sách riêng tư</a></li>
              <li><a href="#">Điều khoản sử dụng</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-col">
            <h5>✉️ BẢN TIN</h5>
            <p>Nhận những ưu đãi đặc biệt và tin tức mới nhất</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Nhập email của bạn" />
              <button>Đăng ký</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom-line">
          <p>© 2026 Văn Hơn - Pizza Restaurant. All rights reserved.</p>
          <p>Designed with ❤️ for Pizza Lovers</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
