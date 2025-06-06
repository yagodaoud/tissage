import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../hooks/AuthContext';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout, getUserType } = useAuth();

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
     
      // Show header when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
     
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
   
    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

    const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
    setActiveTab('');
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      handleLogout();
    } else {
      navigate('/login');
      setActiveTab('');
    }
  };

  return (
    <header className={`tissage-header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      {/* Logo Row */}
      <div className="logo-row">
        <div className="logo">
          <img src="/resources/tissage-logo.png" alt="Tissage Logo" className="tissage-logo" />
        </div>
      </div>
     
      {/* Navigation Row */}
      <div className="header-container">
        <div className="header-left">
          <div className="logo-small">
            {isAuthenticated ? (
              // Show user profile icon with border when logged in
              <div
                className="user-profile"
                style={{
                  width: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--mineral-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  border: '2px solid var(--strawberry-cream)',
                  boxShadow: '0 0 10px rgba(255, 105, 180, 0.4)', // brilho rosa sutil
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 105, 180, 0.7)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(255, 105, 180, 0.4)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                onClick={() => navigate(getUserType() === 'admin' ? '/admin' : getUserType() === 'artesao' ? '/artesao/1' : '/profile')}
              >
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
            ) : (
              <img src="/resources/s-logo.png" alt="Tissage Logo" className="s-logo-img" />
            )}
          </div>
          <button 
            className="partner-button"
            onClick={handleAuthAction}
          >
            {isAuthenticated ? 'Sair' : 'Login'}
          </button>
        </div>
       
        <div className="header-center">
          <nav className="main-nav">
            <Link
              to="/"
              className={activeTab === 'menu' ? 'active' : ''}
              onClick={() => setActiveTab('menu')}
            >
              Página Inicial
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
            <Link
              to="/carrinho"
              className={`cart-nav-item ${activeTab === 'carrinho' ? 'active' : ''}`}
              onClick={() => setActiveTab('carrinho')}
            >
              <span>Carrinho</span>
              <div className="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <span className="cart-count">0</span>
              </div>
            </Link>
          </nav>
        </div>
       
        <div className="header-right">
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