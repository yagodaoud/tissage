import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, determineUserType } = useAuth();

  const determineRedirectPath = (email: string) => {
    // Regex patterns to check what's between @ and .
    const adminPattern = /@admin\./i;
    const artesaoPattern = /@artesao\./i;
    const clientePattern = /@cliente\./i;
    
    if (adminPattern.test(email)) {
      return '/admin';
    } else if (artesaoPattern.test(email)) {
      return '/artesao/1';
    } else if (clientePattern.test(email)) {
      return '/';
    } else {
      // Default to home for any other email pattern
      return '/';
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Get form data
      const formData = new FormData(e.target);
      const email = formData.get('email');
      const emailStr = email?.toString() || '';
      
      // Mock login validation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Determine user type and login
      const userType = determineUserType(emailStr);
      login(emailStr, userType);
      
      // Determine redirect path based on email
      const redirectPath = determineRedirectPath(emailStr);
      
      // Navigate to the appropriate path
      navigate(redirectPath, { replace: true });
      
      // Guarantee scroll to top
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
      
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMouseOver = (e: any) => {
    const target = e.target;
    target.style.backgroundColor = 'var(--light-gray)';
  };

  const handleMouseOut = (e: any) => {
    const target = e.target;
    target.style.backgroundColor = 'white';
  };

  return (
    <div className="auth-page" style={{ 
      backgroundColor: 'var(--light-gray)',
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 0'
    }}>
      <div className="auth-container" style={{ 
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '450px',
        padding: '40px'
      }}>
        <div className="auth-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            color: 'var(--mineral-green)',
            marginBottom: '10px',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Entrar
          </h1>
          <p style={{ color: 'var(--dark-gray)' }}>
            Bem-vindo de volta! Insira seus dados.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
              E-mail
            </label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="Digite seu e-mail"
              required
              style={{ 
                width: '100%',
                padding: '12px',
                border: '1px solid var(--medium-gray)',
                borderRadius: '4px'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <label htmlFor="password" style={{ fontWeight: '500' }}>
                Senha
              </label>
              <Link to="/forgot-password" style={{ 
                color: 'var(--mineral-green)',
                fontSize: '0.9rem'
              }}>
                Esqueceu a senha?
              </Link>
            </div>
            <input 
              type="password" 
              id="password" 
              name="password"
              placeholder="Digite sua senha"
              required
              style={{ 
                width: '100%',
                padding: '12px',
                border: '1px solid var(--medium-gray)',
                borderRadius: '4px'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
            <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <input 
                type="checkbox" 
                name="rememberMe"
                style={{ 
                  marginRight: '10px',
                  width: '16px',
                  height: '16px',
                  accentColor: 'var(--mineral-green)',
                  cursor: 'pointer'
                }}
              />
              <span style={{ transform: 'translateY(-6px)' }}>
                Lembrar de mim
              </span>
            </label>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              textAlign: 'center',
              marginBottom: '30px',
              backgroundColor: isLoading ? 'var(--medium-gray)' : 'var(--mineral-green)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>

          <div className="auth-options" style={{ textAlign: 'center', marginBottom: '30px' }}>
            <p style={{ marginBottom: '20px', color: 'var(--dark-gray)' }}>
              Ou continue com
            </p>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
              <button 
                type="button"
                style={{ 
                  width: '50px',
                  height: '50px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#4285f4',
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                G
              </button>

              <button 
                type="button"
                style={{ 
                  width: '50px',
                  height: '50px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#1877f2',
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                f
              </button>

              <button 
                type="button"
                style={{ 
                  width: '50px',
                  height: '50px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  background: 'white',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: '#0077b5',
                  fontWeight: 'bold',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                in
              </button>
            </div>
          </div>

          <p style={{ textAlign: 'center', color: 'var(--dark-gray)' }}>
            Não tem uma conta? <Link to="/register" style={{ color: 'var(--mineral-green)', fontWeight: '500' }}>Criar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;