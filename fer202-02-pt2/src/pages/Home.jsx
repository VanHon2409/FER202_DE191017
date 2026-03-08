import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExpenseTable from "../components/ExpenseTable";
import ExpenseForm from "../components/ExpenseForm";
import { fetchExpenses, setFilter } from "../redux/expenseSlice";

function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items, filterCategory, status, error } = useSelector((state) => state.expenses);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    if (user) {
      dispatch(fetchExpenses(user.id));
    }
  }, [dispatch, user]);

  const totalExpenses = items
    .filter((e) => e.category.toLowerCase().includes(filterCategory.toLowerCase()))
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Header />

      <main className="container my-5 flex-grow-1">
        {status === "failed" && (
          <div className="alert alert-danger shadow-sm rounded-4 mb-4">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error} - Make sure your JSON Server is running on port 9999!
          </div>
        )}

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="card shadow-sm border-0 rounded-4 h-100 bg-primary text-white">
              <div className="card-body p-4 d-flex flex-column justify-content-center">
                <h6 className="text-uppercase fw-bold opacity-75 mb-2">Total Expenses</h6>
                <h2 className="display-5 fw-bold mb-0">
                  {formatCurrency(totalExpenses)}
                </h2>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="card-body p-4 d-flex flex-column justify-content-center">
                <h6 className="text-uppercase fw-bold text-muted mb-2">Filter by Category</h6>
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-filter text-muted"></i>
                  </span>
                  <select
                    className="form-select border-start-0 ps-0"
                    value={filterCategory}
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                  >
                    <option value="">All categories</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Mua sắm">Mua sắm</option>
                    <option value="Utilities">Utilities</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4">
            <ExpenseForm
              editingExpense={editingExpense}
              clearEditing={() => setEditingExpense(null)}
            />
          </div>

          <div className="col-lg-8">
            <div className="card shadow-sm border-0 rounded-4 h-100">
              <div className="card-body p-4">
                <h5 className="card-title mb-4 fw-bold">Expense Management</h5>
                <ExpenseTable onEdit={setEditingExpense} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;