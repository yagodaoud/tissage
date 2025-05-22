import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
 
  return (
    <header className="tissage-header">
      {/* Logo Row */}
      <div className="logo-row">
        <div className="logo">
          <svg className="tissage-logo-svg">
            <use xlinkHref="/resources/tissage-logo.svg#tissage-logo" />
          </svg>
        </div>
      </div>
      
      {/* Navigation Row */}
      <div className="header-container">
        <div className="header-left">
          <div className="logo-small">
            <img src="/resources/s-logo.png" alt="S Logo" className="s-logo-img" />
          </div>
          <Link to="/register">
            <button className="partner-button">Seja Parceiro</button>
          </Link>
        </div>
       
        <div className="header-center">
          <nav className="main-nav">
            <Link
              to="/"
              className={activeTab === 'menu' ? 'active' : ''}
              onClick={() => setActiveTab('menu')}
            >
              Menu
            </Link>
            <Link
              to="/artesaos"
              className={activeTab === 'artesaos' ? 'active' : ''}
              onClick={() => setActiveTab('artesaos')}
            >
              Artesãos
            </Link>
            <Link
              to="/produtos"
              className={activeTab === 'produtos' ? 'active' : ''}
              onClick={() => setActiveTab('produtos')}
            >
              Produtos
            </Link>
          </nav>
        </div>
       
        <div className="header-right">
          <Link to="/carrinho" className="cart-button">
            Carrinho
            <div className="cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span className="cart-count">0</span>
            </div>
          </Link>
          <div className="search-container">
            <input type="text" placeholder="Buscar" className="search-input" />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;