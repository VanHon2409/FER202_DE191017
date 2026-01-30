import React, { useReducer } from 'react';


const initialState = {
  name: '',
  price: '',
  category: 'Electronics',
};
const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const ProductForm = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  return (
    <div className="product-form-container">
      <h3>Exercise 3: Product Form</h3> 
      <p style={{ color: '#999', marginBottom: '25px', fontSize: '14px' }}>
        Add and manage product information
      </p>
      <form>
        <label>
          📦 Tên sản phẩm
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm..."
          />
        </label>
        <label>
          💰 Giá (VND)
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Nhập giá sản phẩm..."
          />
        </label>
        <label>
          📂 Danh mục
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="Electronics">⚡ Electronics</option>
            <option value="Clothing">👔 Clothing</option>
            <option value="Books">📚 Books</option>
          </select>
        </label>
      </form>
      <div>
        <strong>📋 Dữ liệu hiện tại:</strong>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ProductForm;
