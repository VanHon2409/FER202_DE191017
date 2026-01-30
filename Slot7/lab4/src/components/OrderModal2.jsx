import React, { useReducer } from 'react';

const initialState = {
    isShowModal: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                isShowModal: true
            };

        case 'CLOSE_MODAL':
            return {
                ...state,
                isShowModal: false
            };

        case 'CONFIRM_ORDER':
            alert("✓ Thành công: Đơn hàng đã được duyệt để chuyển sang bộ phận kho!");
            return {
                ...state,
                isShowModal: false
            };

        default:
            return state;
    }
}

const OrderModal = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="order-modal-container">
            <h3>Exercise 2: Order Processing</h3>

            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '25px', fontSize: '14px' }}>
                Manage and approve orders
            </p>
            <button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>
                📋 Xử lý đơn hàng
            </button>
            {state.isShowModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div style={{
                            display: 'flex',justifyContent: 'space-between',alignItems: 'center', marginBottom: '20px'
                        }}>
                            <h4>⚠️ Xác nhận đơn hàng</h4>
                            <span
                                style={{ cursor: 'pointer' }}
                                onClick={() => dispatch({ type: 'CLOSE_MODAL' })}
                            >
                                ✕
                            </span>
                        </div>

                        <p>
                            Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
                        </p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '10px',
                            marginTop: '25px'
                        }}>
                            <button onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
                                Hủy
                            </button>
                            <button onClick={() => dispatch({ type: 'CONFIRM_ORDER' })}>
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderModal;
