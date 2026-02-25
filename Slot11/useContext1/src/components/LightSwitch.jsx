import React, { useReducer, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const initialState = { isOn: false };
function reducer(state, action) {
    switch (action.type) {
        case 'toggle': return { isOn: !state.isOn };
        case 'turnOn': return { isOn: true };
        case 'turnOff': return { isOn: false };
        case 'sync': return { isOn: action.value };
        default: return state;
    }
}

function LightSwitch() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme, toggleTheme } = useTheme();

    // Đồng bộ hóa trạng thái switch với theme hệ thống
    useEffect(() => {
        dispatch({ type: 'sync', value: theme === 'light' });
    }, [theme]);

    const handleToggle = () => {
        toggleTheme();
    };

    const handleTurnOn = () => {
        if (theme !== 'light') toggleTheme();
    };

    const handleTurnOff = () => {
        if (theme !== 'dark') toggleTheme();
    };

    return (
        <div className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Hiệu ứng hào quang khi đèn bật */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: state.isOn
                    ? 'radial-gradient(circle, rgba(255,243,176,0.15) 0%, rgba(255,255,255,0) 70%)'
                    : 'none',
                pointerEvents: 'none',
                transition: 'all 0.8s ease'
            }} />

            <h2>Điều Khiển Ánh Sáng</h2>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <div style={{
                    fontSize: '5rem',
                    marginBottom: '1rem',
                    filter: state.isOn ? 'drop-shadow(0 0 20px #f6e58d)' : 'none',
                    transition: 'all 0.5s ease'
                }}>
                    {state.isOn ? '💡' : '🌑'}
                </div>
                <p style={{ fontWeight: '600', color: state.isOn ? 'var(--accent-primary)' : 'var(--text-secondary)' }}>
                    HỆ THỐNG ĐANG: {state.isOn ? 'SÁNG' : 'Tối'}
                </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                    className="premium-button"
                    onClick={handleToggle}
                    style={{ background: 'var(--accent-primary)', color: 'white', flex: 2 }}
                >
                    <span>🔄</span> Đảo Ngược
                </button>
                <button
                    className="premium-button"
                    onClick={handleTurnOn}
                    style={{ background: '#f9ca24', color: '#2d3436', flex: 1 }}
                >
                    Bật Đèn
                </button>
                <button
                    className="premium-button"
                    onClick={handleTurnOff}
                    style={{ background: '#535c68', color: 'white', flex: 1 }}
                >
                    Tắt Đèn
                </button>
            </div>
        </div>
    );
}

export default LightSwitch;
