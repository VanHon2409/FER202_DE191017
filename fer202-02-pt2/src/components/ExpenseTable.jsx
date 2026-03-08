import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expenseSlice";

function ExpenseTable({ onEdit }) {
    const dispatch = useDispatch();
    const { items, filterCategory } = useSelector((state) => state.expenses);

    const filteredExpenses = items.filter((expense) => {
        const category = expense.category ? String(expense.category).toLowerCase() : "";
        return category.includes(filterCategory.toLowerCase());
    });

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(amount);
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
        const [year, month, day] = dateString.split("-");
        return `${day}-${month}-${year}`;
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this expense?")) {
            dispatch(deleteExpense(id));
        }
    };

    return (
        <div className="table-responsive">
            <table className="table table-hover align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredExpenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{formatCurrency(expense.amount)}</td>
                            <td>
                                <span className="badge bg-info text-dark">{expense.category}</span>
                            </td>
                            <td>{formatDate(expense.date)}</td>
                            <td>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEdit(expense)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(expense.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {filteredExpenses.length === 0 && (
                        <tr>
                            <td colSpan="5" className="text-center py-4 text-muted">
                                No expenses found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;
