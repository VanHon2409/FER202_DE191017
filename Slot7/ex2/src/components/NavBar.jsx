import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={{
            padding: '0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
            marginBottom: '0',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: '0',
            zIndex: '999'
        }}>
            <ul style={{
                display: 'flex',
                listStyleType: 'none',
                gap: '0',
                margin: 0,
                padding: '0 30px',
                alignItems: 'center',
                height: '100%',
                width: '100%'
            }}>
                <li style={{ marginRight: 'auto' }}>
                    <span style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                        FER202
                    </span>
                </li>
                <li>
                    <Link to="/ex1" style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease',
                        fontWeight: '500',
                        display: 'block'
                    }} onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.target.style.background = 'transparent'}>
                        Exercise 1
                    </Link>
                </li>
                <li>
                    <Link to="/ex2" style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease',
                        fontWeight: '500',
                        display: 'block'
                    }} onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.target.style.background = 'transparent'}>
                        Exercise 2
                    </Link>
                </li>
                <li>
                    <Link to="/ex3" style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease',
                        fontWeight: '500',
                        display: 'block'
                    }} onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.target.style.background = 'transparent'}>
                        Exercise 3
                    </Link>
                </li>
                <li>
                    <Link to="/ex4" style={{
                        color: 'white',
                        textDecoration: 'none',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        transition: 'all 0.3s ease',
                        fontWeight: '500',
                        display: 'block'
                    }} onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={(e) => e.target.style.background = 'transparent'}>
                        Exercise 4
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
