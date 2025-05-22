import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
            {isLogin ? 'Entrar' : 'Criar uma Conta'}
          </h1>
          <p style={{ color: 'var(--dark-gray)' }}>
            {isLogin 
              ? 'Bem-vindo de volta! Insira seus dados.' 
              : 'Junte-se à nossa comunidade de artesãos e clientes.'}
          </p>
        </div>

        <div className="auth-tabs" style={{ 
          display: 'flex',
          marginBottom: '30px',
          borderBottom: '1px solid var(--medium-gray)'
        }}>
          <button 
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
            style={{ 
              flex: 1,
              padding: '10px',
              border: 'none',
              background: 'none',
              borderBottom: isLogin ? '3px solid var(--mineral-green)' : 'none',
              color: isLogin ? 'var(--mineral-green)' : 'var(--dark-gray)',
              fontWeight: isLogin ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
          >
            Entrar
          </button>

          <button 
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
            style={{ 
              flex: 1,
              padding: '10px',
              border: 'none',
              background: 'none',
              borderBottom: !isLogin ? '3px solid var(--mineral-green)' : 'none',
              color: !isLogin ? 'var(--mineral-green)' : 'var(--dark-gray)',
              fontWeight: !isLogin ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
          >
            Cadastrar
          </button>
        </div>

        {isLogin ? (
          <form className="login-form">
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                E-mail
              </label>
              <input 
                type="email" 
                id="email" 
                placeholder="Digite seu e-mail"
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
                placeholder="Digite sua senha"
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  style={{ marginRight: '10px' }}
                />
                <span>Lembrar de mim</span>
              </label>
            </div>

            <Link to="/" className="button" style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              textAlign: 'center',
              marginBottom: '20px',
              backgroundColor: 'var(--mineral-green)',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Entrar
            </Link>

            <div className="auth-options" style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '20px', color: 'var(--dark-gray)' }}>
                Ou continue com
              </p>

              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button style={{ 
                  width: '50px',
                  height: '50px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  background: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}>
                  G
                </button>

                <button style={{ 
                  width: '50px',
                  height: '50px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  background: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}>
                  f
                </button>

                <button style={{ 
                  width: '50px',
                  height: '50px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  background: 'none',
                  cursor: 'pointer',
                  fontSize: '1.2rem'
                }}>
                  in
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form className="register-form">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div className="form-group">
                <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Nome
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="Digite seu nome"
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--medium-gray)',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Sobrenome
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Digite seu sobrenome"
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--medium-gray)',
                    borderRadius: '4px'
                  }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="registerEmail" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                E-mail
              </label>
              <input 
                type="email" 
                id="registerEmail" 
                placeholder="Digite seu e-mail"
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="registerPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Senha
              </label>
              <input 
                type="password" 
                id="registerPassword" 
                placeholder="Crie uma senha"
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px'
                }}
              />
              <p style={{ fontSize: '0.8rem', color: 'var(--dark-gray)', marginTop: '5px' }}>
                A senha deve ter pelo menos 8 caracteres
              </p>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="accountType" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Tipo de Conta
              </label>
              <select 
                id="accountType"
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px',
                  backgroundColor: 'white'
                }}
              >
                <option value="customer">Cliente</option>
                <option value="artisan">Artesão</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  style={{ marginRight: '10px' }}
                />
                <span>Eu concordo com os <Link to="/terms" style={{ color: 'var(--mineral-green)' }}>Termos de Serviço</Link> e a <Link to="/privacy" style={{ color: 'var(--mineral-green)' }}>Política de Privacidade</Link></span>
              </label>
            </div>

            <Link to="/" className="button" style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              textAlign: 'center',
              marginBottom: '20px',
              backgroundColor: 'var(--mineral-green)',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Criar Conta
            </Link>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
