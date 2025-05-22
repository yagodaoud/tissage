import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ArtisanDashboardPageProps {}

const ArtisanDashboardPage: React.FC<ArtisanDashboardPageProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('products');
  
  return (
    <div className="artisan-dashboard-page">
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '30px', color: 'var(--mineral-green)' }}>Dashboard do Artesão</h1>
        
        <div className="dashboard-layout" style={{ 
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '30px'
        }}>
          <div className="dashboard-sidebar" style={{ 
            backgroundColor: 'var(--light-gray)',
            borderRadius: '8px',
            padding: '20px',
            height: 'fit-content'
          }}>
            <div className="artisan-profile" style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '30px'
            }}>
              <div className="artisan-avatar" style={{ 
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--medium-gray)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#999',
                marginBottom: '15px'
              }}>
                Avatar
              </div>
              
              <h3 style={{ marginBottom: '5px' }}>Maria Silva</h3>
              <p style={{ color: 'var(--dark-gray)', marginBottom: '10px' }}>Tecelagem Artesanal</p>
              <span style={{ color: 'var(--mineral-green)', fontSize: '0.9rem', cursor: 'pointer' }}>
                Editar perfil
              </span>
            </div>
            
            <nav className="dashboard-nav" style={{ 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '10px'
            }}>
              <button 
                onClick={() => setActiveTab('products')}
                style={{ 
                  padding: '12px 15px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: activeTab === 'products' ? 'var(--mineral-green)' : 'transparent',
                  color: activeTab === 'products' ? 'white' : 'var(--black)',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'products' ? 'bold' : 'normal',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}
              >
                Produtos
              </button>
              
              <button 
                onClick={() => setActiveTab('orders')}
                style={{ 
                  padding: '12px 15px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: activeTab === 'orders' ? 'var(--mineral-green)' : 'transparent',
                  color: activeTab === 'orders' ? 'white' : 'var(--black)',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'orders' ? 'bold' : 'normal',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}
              >
                Pedidos
              </button>
              
              <button 
                onClick={() => setActiveTab('statistics')}
                style={{ 
                  padding: '12px 15px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: activeTab === 'statistics' ? 'var(--mineral-green)' : 'transparent',
                  color: activeTab === 'statistics' ? 'white' : 'var(--black)',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'statistics' ? 'bold' : 'normal',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}
              >
                Estatísticas
              </button>
              
              <button 
                onClick={() => setActiveTab('settings')}
                style={{ 
                  padding: '12px 15px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: activeTab === 'settings' ? 'var(--mineral-green)' : 'transparent',
                  color: activeTab === 'settings' ? 'white' : 'var(--black)',
                  cursor: 'pointer',
                  fontWeight: activeTab === 'settings' ? 'bold' : 'normal',
                  textAlign: 'center',
                  fontSize: '0.9rem'
                }}
              >
                Configurações
              </button>
            </nav>
          </div>
          
          <div className="dashboard-content">
            {activeTab === 'products' && (
              <div className="products-tab">
                <div className="tab-header" style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '30px'
                }}>
                  <h2>Meus Produtos</h2>
                  <button className="button">Adicionar novo produto</button>
                </div>
                
                <div className="products-list" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  overflowX: 'auto'
                }}>
                  <div className="products-header" style={{ 
                    display: 'grid',
                    gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 100px',
                    gap: '15px',
                    padding: '15px 20px',
                    backgroundColor: 'var(--light-gray)',
                    fontWeight: 'bold',
                    minWidth: '700px'
                  }}>
                    <div>Imagem</div>
                    <div>Produto</div>
                    <div>Preço</div>
                    <div>Estoque</div>
                    <div>Status</div>
                    <div>Ações</div>
                  </div>
                  
                  {[1, 2, 3, 4].map(productId => (
                    <div key={productId} className="product-row" style={{ 
                      display: 'grid',
                      gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 100px',
                      gap: '15px',
                      padding: '15px 20px',
                      borderBottom: '1px solid var(--light-gray)',
                      alignItems: 'center'
                    }}>
                      <div className="product-image" style={{ 
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#999',
                        borderRadius: '4px'
                      }}>
                        Img
                      </div>
                      
                      <div className="product-name">
                        <p style={{ fontWeight: '500', marginBottom: '5px' }}>Nome do Produto</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--dark-gray)' }}>Categoria</p>
                      </div>
                      
                      <div className="product-price">
                        R$XX.XX
                      </div>
                      
                      <div className="product-stock">
                        XX em estoque
                      </div>
                      
                      <div className="product-status">
                        <span style={{ 
                          display: 'inline-block',
                          padding: '5px 10px',
                          backgroundColor: 'var(--strawberry-cream)',
                          color: 'var(--mineral-green)',
                          borderRadius: '20px',
                          fontSize: '0.9rem'
                        }}>
                          Ativo
                        </span>
                      </div>
                      
                      <div className="product-actions" style={{ 
                        gap: '10px'
                      }}>
                        <button style={{ 
                          border: 'none',
                          background: 'none',
                          color: 'var(--mineral-green)',
                          cursor: 'pointer'
                        }}>
                          Editar
                        </button>
                        
                        <button style={{ 
                          border: 'none',
                          background: 'none',
                          color: '#d9534f',
                          cursor: 'pointer'
                        }}>
                          Deletar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div className="orders-tab">
                <h2 style={{ marginBottom: '30px' }}>Pedidos recentes</h2>
                
                <div className="orders-list" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}>
                  <div className="orders-header" style={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr',
                    gap: '15px',
                    padding: '15px 20px',
                    backgroundColor: 'var(--light-gray)',
                    fontWeight: 'bold'
                  }}>
                    <div>ID do Pedido</div>
                    <div>Cliente</div>
                    <div>Data</div>
                    <div>Total</div>
                    <div>Status</div>
                  </div>
                  
                  {[1, 2, 3, 4].map(orderId => (
                    <div key={orderId} className="order-row" style={{ 
                      display: 'grid',
                      gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr',
                      gap: '15px',
                      padding: '15px 20px',
                      borderBottom: '1px solid var(--light-gray)',
                      alignItems: 'center'
                    }}>
                      <div className="order-id">
                        #{10000 + orderId}
                      </div>
                      
                      <div className="order-customer">
                        Nome do Cliente
                      </div>
                      
                      <div className="order-date">
                        20 de Maio de 2025
                      </div>
                      
                      <div className="order-total">
                        R$XX.XX
                      </div>
                      
                      <div className="order-status">
                        <span style={{ 
                          display: 'inline-block',
                          padding: '5px 10px',
                          backgroundColor: 'var(--strawberry-cream)',
                          color: 'var(--mineral-green)',
                          borderRadius: '20px',
                          fontSize: '0.9rem'
                        }}>
                          Enviado
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'statistics' && (
              <div className="statistics-tab">
                <h2 style={{ marginBottom: '30px' }}>Estatísticas</h2>
                
                <div className="stats-cards" style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '20px',
                  marginBottom: '40px'
                }}>
                  <div className="stat-card" style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Total</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--mineral-green)' }}>R$1.234</p>
                  </div>
                  
                  <div className="stat-card" style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Pedidos</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--mineral-green)' }}>42</p>
                  </div>
                  
                  <div className="stat-card" style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Produtos</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--mineral-green)' }}>12</p>
                  </div>
                  
                  <div className="stat-card" style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Média de Avaliação</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--mineral-green)' }}>4.8</p>
                  </div>
                </div>
                
                <div className="chart-container" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '20px',
                  marginBottom: '30px'
                }}>
                  <h3 style={{ marginBottom: '20px' }}>Vendas no Período</h3>
                  
                  <div className="chart-placeholder" style={{ 
                    height: '300px',
                    backgroundColor: 'var(--light-gray)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--dark-gray)'
                  }}>
                    Gráfico
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="settings-tab">
                <h2 style={{ marginBottom: '30px' }}>Configurações de Conta</h2>
                
                <div className="settings-form" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '30px',
                  marginBottom: '30px'
                }}>
                  <h3 style={{ marginBottom: '20px' }}>Informações Pessoais</h3>
                  
                  <form style={{ display: 'grid', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div className="form-group">
                        <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                          Primeiro Nome
                        </label>
                        <input 
                          type="text" 
                          id="firstName" 
                          defaultValue="Maria"
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
                          defaultValue="Silva"
                          style={{ 
                            width: '100%',
                            padding: '12px',
                            border: '1px solid var(--medium-gray)',
                            borderRadius: '4px'
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        defaultValue="maria@maria.com"
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="specialty" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Especialidade
                      </label>
                      <input 
                        type="text" 
                        id="specialty" 
                        defaultValue="Tecelagem Manual de Tecidos"
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
                        Biografia
                      </label>
                      <textarea 
                        id="bio" 
                        rows={4}
                        defaultValue="Maria tece peças tradicionais brasileiras há mais de 20 anos, usando técnicas transmitidas por gerações em sua família."
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px',
                          resize: 'vertical'
                        }}
                      />
                    </div>
                    
                    <button type="button" className="button" style={{ justifySelf: 'start' }}>
                      Salvar
                    </button>
                  </form>
                </div>
                
                <div className="password-form" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '30px'
                }}>
                  <h3 style={{ marginBottom: '20px' }}>Mudar Senha</h3>
                  
                  <form style={{ display: 'grid', gap: '20px' }}>
                    <div className="form-group">
                      <label htmlFor="currentPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Senha Atual
                      </label>
                      <input 
                        type="password" 
                        id="currentPassword" 
                        placeholder="Digite sua senha atual"
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="newPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Nova Senha
                      </label>
                      <input 
                        type="password" 
                        id="newPassword" 
                        placeholder="Digite sua nova senha"
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="confirmNewPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Repita a Senha
                      </label>
                      <input 
                        type="password" 
                        id="confirmNewPassword" 
                        placeholder="Confirmar Senha"
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <button type="button" className="button" style={{ justifySelf: 'start' }}>
                      Atualizar Senha
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDashboardPage;
