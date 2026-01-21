import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="contact-page">
      <div className="container py-5">
        <h1 className="display-4 text-center mb-5" style={{ color: '#e74c3c' }}>
          📞 Liên Hệ Với Chúng Tôi
        </h1>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-5 mb-4">
            <div className="bg-light p-4 rounded shadow-sm h-100">
              <h3 className="mb-4" style={{ color: '#e74c3c' }}>Thông Tin Liên Hệ</h3>

              <div className="mb-4">
                <h5 className="mb-2">
                  <span style={{ color: '#e74c3c', marginRight: '10px' }}>📍</span>
                  Địa Chỉ
                </h5>
                <p className="text-muted">123 Đường Pizza, TP. Đà Nẵng, Việt Nam</p>
              </div>

              <div className="mb-4">
                <h5 className="mb-2">
                  <span style={{ color: '#e74c3c', marginRight: '10px' }}>📞</span>
                  Điện Thoại
                </h5>
                <p className="text-muted">
                  <a href="tel:+84708091060" style={{ color: '#e74c3c', textDecoration: 'none' }}>
                    +84 (0) 708 091 060
                  </a>
                </p>
              </div>

              <div className="mb-4">
                <h5 className="mb-2">
                  <span style={{ color: '#e74c3c', marginRight: '10px' }}>📧</span>
                  Email
                </h5>
                <p className="text-muted">
                  <a href="mailto:info@pizzarestaurant.com" style={{ color: '#e74c3c', textDecoration: 'none' }}>
                    info@pizzarestaurant.com
                  </a>
                </p>
              </div>

              <div className="mb-4">
                <h5 className="mb-2">
                  <span style={{ color: '#e74c3c', marginRight: '10px' }}>🕐</span>
                  Giờ Hoạt Động
                </h5>
                <p className="text-muted mb-1">Thứ 2 - Thứ 7: 10:00 - 23:00</p>
                <p className="text-muted">Chủ nhật: 11:00 - 22:00</p>
              </div>

              <div className="mt-4">
                <h5 className="mb-3">Theo Dõi Chúng Tôi</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="text-decoration-none" style={{ color: '#e74c3c', fontSize: '1.5em' }}>
                    📱
                  </a>
                  <a href="#" className="text-decoration-none" style={{ color: '#e74c3c', fontSize: '1.5em' }}>
                    🐦
                  </a>
                  <a href="#" className="text-decoration-none" style={{ color: '#e74c3c', fontSize: '1.5em' }}>
                    📷
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h3 className="card-title mb-4" style={{ color: '#e74c3c' }}>
                  Gửi Tin Nhắn Cho Chúng Tôi
                </h3>

                {submitted && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>✅ Thành Công!</strong> Tin nhắn của bạn đã được gửi. Chúng tôi sẽ liên hệ với bạn sớm nhất.
                    <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <strong>Tên Của Bạn</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập tên của bạn"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <strong>Email</strong>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập email của bạn"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      <strong>Số Điện Thoại</strong>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      <strong>Chủ Đề</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Chủ đề tin nhắn"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      <strong>Tin Nhắn</strong>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Nhập tin nhắn của bạn"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-danger btn-lg w-100"
                    style={{ backgroundColor: '#e74c3c', border: 'none' }}
                  >
                    <strong>Gửi Tin Nhắn</strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-header bg-dark text-white p-3">
                <h5 className="mb-0">📍 Bản Đồ Vị Trí</h5>
              </div>
              <div className="card-body p-0">
                <iframe
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9382707847947!2d107.05731!3d10.769286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529204217a5d9%3A0xf86eb78e86e5e31!2sDa%20Nang%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1234567890"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pizza House Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
