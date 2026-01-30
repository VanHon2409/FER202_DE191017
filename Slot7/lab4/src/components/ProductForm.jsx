import React, { useState } from 'react';

const ProductForm = () => {
    const [form, setForm] = useState({
        name: '',
        price: '',
        category: 'Electronics'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <div className="product-form-container">
            <h3>Exercise 3: Product Form</h3> 
            <p style={{ color: '#999', marginBottom: '25px', fontSize: '14px' }}>Add and manage product information</p>
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
