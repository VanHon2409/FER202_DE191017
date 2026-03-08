import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3 shadow">
      <div className="container-fluid">
        <span className="navbar-brand d-flex align-items-center fw-bold fs-4">
          <i className="bi bi-wallet2 me-2"></i>
          PersonalBudget
        </span>

        <div className="d-flex align-items-center">
          <span className="text-white me-4 opacity-75">
            Signed in as: <strong className="text-white">{user?.fullName || "Guest"}</strong>
          </span>

          <button
            className="btn btn-outline-light btn-sm px-3 rounded-pill"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;