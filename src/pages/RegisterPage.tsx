import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [accountType, setAccountType] = useState('customer');

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
        maxWidth: '600px',
        padding: '40px'
      }}>
        <div className="auth-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            color: 'var(--mineral-green)',
            marginBottom: '10px',
            fontFamily: "'Bugaki', 'Montserrat', sans-serif"
          }}>
            Criar uma Conta
          </h1>
          <p style={{ color: 'var(--dark-gray)' }}>
            Junte-se à nossa comunidade de artesãos e clientes.
          </p>
        </div>
        
        <div className="account-type-selector" style={{ 
          display: 'flex',
          marginBottom: '30px',
          gap: '15px'
        }}>
          <button 
            className={accountType === 'customer' ? 'active' : ''}
            onClick={() => setAccountType('customer')}
            style={{ 
              flex: 1,
              padding: '15px',
              border: accountType === 'customer' ? '' : '1px solid var(--medium-gray)',
              borderRadius: '8px',
              background: accountType === 'customer' ? 'var(--strawberry-cream)' : 'white',
              color: 'var(--mineral-green)',
              fontWeight: accountType === 'customer' ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
          >
            Cliente
          </button>
          
          <button 
            className={accountType === 'artisan' ? 'active' : ''}
            onClick={() => setAccountType('artisan')}
            style={{ 
              flex: 1,
              padding: '15px',
              border: accountType === 'artisan' ? '' : '1px solid var(--medium-gray)',
              borderRadius: '8px',
              background: accountType === 'artisan' ? 'var(--strawberry-cream)' : 'white',
              color: 'var(--mineral-green)',
              fontWeight: accountType === 'artisan' ? 'bold' : 'normal',
              cursor: 'pointer'
            }}
          >
            Artesão
          </button>
        </div>
        
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
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
            <div className="form-group">
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Senha
              </label>
              <input 
                type="password" 
                id="password" 
                placeholder="Crie uma senha"
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px'
                }}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                Confirmar Senha
              </label>
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirme sua senha"
                style={{ 
                  width: '100%',
                  padding: '12px',
                  border: '1px solid var(--medium-gray)',
                  borderRadius: '4px'
                }}
              />
            </div>
          </div>
          
          <p style={{ fontSize: '0.8rem', color: 'var(--dark-gray)', marginBottom: '20px' }}>
            A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.
          </p>
          
          {accountType === 'artisan' && (
            <div className="artisan-fields" style={{ 
              backgroundColor: 'var(--light-gray)',
              padding: '20px',
              borderRadius: '8px',
              marginBottom: '20px'
            }}>
              <h3 style={{ marginBottom: '15px', color: 'var(--mineral-green)' }}>Informações do Artesão</h3>
              
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="specialty" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Especialidade
                </label>
                <input 
                  type="text" 
                  id="specialty" 
                  placeholder="Ex: Marcenaria, Cerâmica, Têxteis"
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--medium-gray)',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '15px' }}>
                <label htmlFor="location" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Localização
                </label>
                <input 
                  type="text" 
                  id="location" 
                  placeholder="Cidade, País"
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--medium-gray)',
                    borderRadius: '4px'
                  }}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="bio" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Sobre você
                </label>
                <textarea 
                  id="bio" 
                  placeholder="Conte-nos sobre você e seu trabalho..."
                  rows={4}
                  style={{ 
                    width: '100%',
                    padding: '12px',
                    border: '1px solid var(--medium-gray)',
                    borderRadius: '4px',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>
          )}
          
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                style={{ marginRight: '10px' }}
              />
              <span>Concordo com os <Link to="/terms" style={{ color: 'var(--mineral-green)' }}>Termos de Serviço</Link> e a <Link to="/privacy" style={{ color: 'var(--mineral-green)' }}>Política de Privacidade</Link></span>
            </label>
          </div>
          
          <Link to="/" className="button" style={{ 
            display: 'block',
            width: '100%',
            padding: '12px',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            Criar Conta
          </Link>
          
          <p style={{ textAlign: 'center' }}>
            Já tem uma conta? <Link to="/login" style={{ color: 'var(--mineral-green)' }}>Entrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
