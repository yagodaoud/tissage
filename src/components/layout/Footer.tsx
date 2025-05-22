import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content" style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          padding: '50px 0 30px'
        }}>
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '15px' }}>
              <Link to="/" style={{ 
                color: 'white', 
                fontSize: '1.8rem', 
                fontWeight: 'bold',
                textDecoration: 'none',
                fontFamily: "'Bugaki', 'Montserrat', sans-serif"
              }}>
                TISSAGE
              </Link>
              <div style={{ 
                fontSize: '0.8rem', 
                color: 'var(--strawberry-cream)',
                marginTop: '-5px'
              }}>
                ARTE DE UNIR IDEIAS
              </div>
            </div>
            <p style={{ color: 'var(--light-gray)', lineHeight: '1.6' }}>
              Connecting artisans with customers, celebrating handmade craftsmanship and supporting sustainable development.
            </p>
          </div>
          
          <div className="footer-links">
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ color: 'var(--light-gray)' }}>Home</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/products" style={{ color: 'var(--light-gray)' }}>Products</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/artisans/1" style={{ color: 'var(--light-gray)' }}>Artisans</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/login" style={{ color: 'var(--light-gray)' }}>Login</Link>
              </li>
              <li>
                <Link to="/register" style={{ color: 'var(--light-gray)' }}>Register</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-categories">
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>Categories</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/products?category=Home%20Decor" style={{ color: 'var(--light-gray)' }}>Home Decor</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/products?category=Kitchen" style={{ color: 'var(--light-gray)' }}>Kitchen</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/products?category=Accessories" style={{ color: 'var(--light-gray)' }}>Accessories</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/products?category=Jewelry" style={{ color: 'var(--light-gray)' }}>Jewelry</Link>
              </li>
              <li>
                <Link to="/products?category=Textiles" style={{ color: 'var(--light-gray)' }}>Textiles</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>Contact Us</h3>
            <p style={{ color: 'var(--light-gray)', marginBottom: '10px' }}>Email: info@tissage.com</p>
            <p style={{ color: 'var(--light-gray)', marginBottom: '10px' }}>Phone: +55 11 1234-5678</p>
            <div className="social-links" style={{ 
              display: 'flex',
              gap: '15px',
              marginTop: '20px'
            }}>
              <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}>📱</a>
              <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}>📷</a>
              <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}>📘</a>
              <a href="#" style={{ color: 'white', fontSize: '1.2rem' }}>🐦</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '20px 0',
          textAlign: 'center',
          color: 'var(--light-gray)'
        }}>
          <p>&copy; {new Date().getFullYear()} TISSAGE. All rights reserved.</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
            <Link to="/privacy" style={{ color: 'var(--light-gray)', marginRight: '15px' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'var(--light-gray)' }}>Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
