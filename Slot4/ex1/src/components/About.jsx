export default function About() {
  return (
    <main className="about-page">
      <div className="container py-5">
        {/* Header Section */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <img src="" alt="Image" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 mb-4" style={{ color: '#e74c3c' }}>
              🍕 Về Pizza House
            </h1>
            <p className="fs-5 text-muted mb-3">
              Pizza House được thành lập vào năm 2020 với sứ mệnh đem đến những chiếc pizza ngon nhất đến khách hàng.
            </p>
            <p className="fs-5 text-muted mb-3">
              Chúng tôi sử dụng các nguyên liệu tươi mới, nhập khẩu từ Ý, kết hợp với công thức truyền thống để tạo ra những chiếc pizza có hương vị độc đáo.
            </p>
            <p className="fs-5 text-muted">
              Với đội ngũ chef chuyên nghiệp và dịch vụ khách hàng tuyệt vời, Pizza House cam kết mang đến trải nghiệm ẩm thực tuyệt nhất.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="row mt-5 mb-5">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title mb-3" style={{ color: '#e74c3c' }}>
                  🎯 Sứ Mệnh
                </h3>
                <p className="card-text">
                  Cung cấp pizza chất lượng cao với hương vị tuyệt vời, phục vụ khách hàng một cách chân thành và tạo ra niềm vui trong mỗi bữa ăn.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title mb-3" style={{ color: '#e74c3c' }}>
                  👁️ Tầm Nhìn
                </h3>
                <p className="card-text">
                  Trở thành nhà hàng pizza hàng đầu tại Đà Nẵng, được biết đến với chất lượng, dịch vụ và sự đổi mới liên tục.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-5 pt-5 border-top">
          <h2 className="text-center mb-5" style={{ color: '#e74c3c' }}>
            ⭐ Giá Trị Cốt Lõi
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <span style={{ fontSize: '3em' }}>🥘</span>
                </div>
                <h4>Chất Lượng</h4>
                <p className="text-muted">Sử dụng nguyên liệu tốt nhất</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <span style={{ fontSize: '3em' }}>😊</span>
                </div>
                <h4>Dịch Vụ</h4>
                <p className="text-muted">Phục vụ khách hàng với tâm</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <div className="mb-3">
                  <span style={{ fontSize: '3em' }}>🚀</span>
                </div>
                <h4>Đổi Mới</h4>
                <p className="text-muted">Luôn cập nhật xu hướng mới</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-5 pt-5 border-top">
          <h2 className="text-center mb-5" style={{ color: '#e74c3c' }}>
            👨‍🍳 Đội Ngũ Của Chúng Tôi
          </h2>
          <div className="row">
            {[1, 2, 3].map((item) => (
              <div key={item} className="col-md-4 mb-4">
                <div className="card shadow-sm border-0 text-center">
                  <img 
                    src={`https://via.placeholder.com/200x200?text=Chef+${item}`} 
                    className="card-img-top" 
                    alt={`Chef ${item}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Chef Nguyễn {item}</h5>
                    <p className="card-text text-muted">Chuyên gia Pizza</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
