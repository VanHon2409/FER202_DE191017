import { useParams, useNavigate } from "react-router-dom";
import { pizzaData } from "../data/data";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pizza = pizzaData.find((p) => p.id === parseInt(id));

  if (!pizza) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger">Sản phẩm không tìm thấy!</div>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Quay lại trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div className="row align-items-start">
        {/* IMAGE */}
        <div className="col-md-6 mb-4">
          <div className="detail-image-box">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="detail-image"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="col-md-6">
          <h1 className="mb-2 text-white">{pizza.name}</h1>

          {pizza.tag && (
            <span className="badge bg-warning mb-3 ">{pizza.tag}</span>
          )}

          <h3 className="text-danger my-3">
            Giá: <strong>${pizza.price}</strong>
          </h3>
        <div className="detail-description text-white">
          <h5>Mô tả sản phẩm</h5>
          <p>
            Đây là một chiếc pizza ngon tuyệt vời được làm từ những nguyên liệu
            tươi nhất. Hương vị đặc biệt sẽ làm bạn yêu thích từ lần đầu tiên.
          </p>

          <h5>Thông tin dinh dưỡng (trên lát)</h5>
          <ul>
            <li>Calo: 250-300</li>
            <li>Protein: 10g</li>
            <li>Fat: 12g</li>
            <li>Carbs: 30g</li>
          </ul>
</div>
          <div className="d-flex gap-2 mt-4">
            <button className="btn btn-dark btn-lg flex-grow-1">
              Thêm vào giỏ hàng
            </button>
            <button
              className="btn btn-dark btn-lg text-white"
              onClick={() => navigate("/")}
            >
              Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
