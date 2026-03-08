import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense, updateExpense } from "../redux/expenseSlice";

function ExpenseForm({ editingExpense, clearEditing }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        category: "",
        date: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editingExpense) {
            setFormData(editingExpense);
        } else {
            setFormData({
                name: "",
                amount: "",
                category: "",
                date: "",
            });
        }
    }, [editingExpense]);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.category.trim()) newErrors.category = "Category is required";
        if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
            newErrors.amount = "Amount must be a valid number greater than 0";
        }
        if (!formData.date) newErrors.date = "Date is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const expenseData = {
            ...formData,
            userId: user.id,
            amount: Number(formData.amount),
        };

        if (editingExpense) {
            dispatch(updateExpense(expenseData));
            clearEditing();
        } else {
            dispatch(addExpense(expenseData));
        }

        setFormData({
            name: "",
            amount: "",
            category: "",
            date: "",
        });
    };

    return (
        <div className="card shadow-sm rounded-4 border-0">
            <div className="card-body p-4">
                <h5 className="card-title mb-4 fw-bold">
                    {editingExpense ? "Edit Expense" : "Add Expense"}
                </h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label small text-muted text-uppercase fw-bold">Name</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            placeholder="e.g. Lunch"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label small text-muted text-uppercase fw-bold">Amount (VND)</label>
                        <input
                            type="number"
                            className={`form-control ${errors.amount ? "is-invalid" : ""}`}
                            placeholder="0"
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        />
                        {errors.amount && <div className="invalid-feedback">{errors.amount}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label small text-muted text-uppercase fw-bold">Category</label>
                        <select
                            className={`form-select ${errors.category ? "is-invalid" : ""}`}
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="">-- Select Category --</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Food">Food</option>
                            <option value="Mua sắm">Mua sắm</option>
                            <option value="Utilities">Utilities</option>
                        </select>
                        {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="form-label small text-muted text-uppercase fw-bold">Date</label>
                        <input
                            type="date"
                            className={`form-control ${errors.date ? "is-invalid" : ""}`}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary rounded-3 py-2 shadow-sm fw-bold">
                            {editingExpense ? "Update Expense" : "Add Expense"}
                        </button>
                        {editingExpense && (
                            <button
                                type="button"
                                className="btn btn-light rounded-3 py-2 fw-bold"
                                onClick={clearEditing}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ExpenseForm;
