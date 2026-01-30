import React, { useState } from 'react';

const Quantity = () => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="quantity-container">
            <h3>Exercise 1: Quantity Counter</h3>
            <p style={{ color: '#999', marginBottom: '25px', fontSize: '14px' }}>Click the buttons to adjust the quantity</p>
            <div>
                <button onClick={handleDecrement} title="Decrease">−</button>
                <input
                    type="number"
                    value={quantity}
                    readOnly
                />
                <button onClick={handleIncrement} title="Increase">+</button>
            </div>
        </div>
    );
};

export default Quantity;
