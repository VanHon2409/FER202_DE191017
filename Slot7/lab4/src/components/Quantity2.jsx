import React, { useReducer } from 'react';

const initialState = {
    quantity: 0
};

const quantityReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                quantity: state.quantity + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                quantity: state.quantity > 0
                    ? state.quantity - 1
                    : 0
            };
        case 'SET_INPUT':
            return {
                ...state,
                quantity: action.payload < 0 ? 0 : action.payload
            };
        default:
            return state;
    }
};
const Quantity = () => {
    const [state, dispatch] = useReducer(quantityReducer, initialState);

    const handleInputChange = (e) => {
        dispatch({
            type: 'SET_INPUT',
            payload: Number(e.target.value)
        });
    };

    return (
        <div className="quantity-container">
            <h3>Exercise 1: Quantity Counter</h3>

            <p style={{ color: '#999', marginBottom: '25px', fontSize: '14px' }}>
                Click the buttons to adjust the quantity
            </p>

            <div>
                <button
                    onClick={() => dispatch({ type: 'DECREMENT' })}
                >
                    −
                </button>

                <input
                    type="number"
                    value={state.quantity}
                    onChange={handleInputChange}
                />

                <button
                    onClick={() => dispatch({ type: 'INCREMENT' })}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Quantity;
