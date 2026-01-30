import React, { useState } from 'react';

const OrderModal = () => {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleOpenModal = () => {
        setIsShowModal(true);
    };

    const handleCloseModal = () => {
        setIsShowModal(false);
    };

    const handleConfirm = () => {
        alert("✓ Thành công: Đơn hàng đã được duyệt để chuyển sang bộ phận kho!");
        setIsShowModal(false);
    };

    return (
        <div className="order-modal-container">
            <h3>Exercise 2: Order Processing</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '25px', fontSize: '14px' }}>Manage and approve orders</p>
            <button onClick={handleOpenModal}>📋 Xử lý đơn hàng</button>

            {isShowModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <h4>⚠️ Xác nhận đơn hàng</h4>
                            <span onClick={handleCloseModal}>✕</span>
                        </div>
                        <p>Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?</p>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '25px' }}>
                            <button onClick={handleCloseModal}>Hủy</button>
                            <button onClick={handleConfirm}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderModal;
