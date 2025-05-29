import React, { useState } from 'react';

interface ArtisanDashboardPageProps {}

interface ProductStatuses {
  [key: number]: boolean;
}

interface StatusStyles {
  [key: string]: {
    backgroundColor: string;
    color: string;
    borderColor: string;
  };
}

const ArtisanDashboardPage: React.FC<ArtisanDashboardPageProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('products');
  
  const [productStatuses, setProductStatuses] = useState<ProductStatuses>({
  1: true,
  2: true,
  3: false,
  4: true
});

  const toggleProductStatus = (productId: number) => {
    setProductStatuses(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

    const [orderStatuses, setOrderStatuses] = useState({
    1: 'Embalado',
    2: 'Enviado',
    3: 'Entregue',
    4: 'Enviado'
  });

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const statusOptions = ['Embalado', 'Enviado', 'Entregue'];

  const generateNotaFiscal = (orderId: any) => {
    // Create a new window with the invoice content
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    const invoiceContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Nota Fiscal - Pedido #${10000 + orderId}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            line-height: 1.6;
          }
          .header { 
            text-align: center; 
            border-bottom: 2px solid #333; 
            padding-bottom: 20px; 
            margin-bottom: 30px;
          }
          .invoice-details { 
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            gap: 30px; 
            margin-bottom: 30px;
          }
          .section { 
            border: 1px solid #ddd; 
            padding: 15px; 
            border-radius: 5px;
          }
          .section h3 { 
            margin-top: 0; 
            color: #333;
          }
          .items-table { 
            width: 100%; 
            border-collapse: collapse; 
            margin: 20px 0;
          }
          .items-table th, .items-table td { 
            border: 1px solid #ddd; 
            padding: 12px; 
            text-align: left;
          }
          .items-table th { 
            background-color: #f5f5f5; 
            font-weight: bold;
          }
          .total-section { 
            text-align: right; 
            margin-top: 20px; 
            font-size: 18px; 
            font-weight: bold;
          }
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>NOTA FISCAL</h1>
          <p>Número: NF-${String(orderId).padStart(6, '0')}</p>
          <p>Data de Emissão: ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>
        
        <div class="invoice-details">
          <div class="section">
            <h3>Dados da Empresa</h3>
            <p><strong>Sua Empresa LTDA</strong></p>
            <p>CNPJ: 12.345.678/0001-90</p>
            <p>Endereço: Rua Exemplo, 123</p>
            <p>Cidade - Estado, CEP 12345-678</p>
            <p>Tel: (11) 1234-5678</p>
          </div>
          
          <div class="section">
            <h3>Dados do Cliente</h3>
            <p><strong>Nome do Cliente</strong></p>
            <p>CPF/CNPJ: 123.456.789-00</p>
            <p>Endereço: Rua do Cliente, 456</p>
            <p>Cidade - Estado, CEP 87654-321</p>
            <p>Tel: (11) 8765-4321</p>
          </div>
        </div>
        
        <table class="items-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Qtd</th>
              <th>Valor Unit.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Produto Exemplo 1</td>
              <td>2</td>
              <td>R$ 50,00</td>
              <td>R$ 100,00</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Produto Exemplo 2</td>
              <td>1</td>
              <td>R$ 75,00</td>
              <td>R$ 75,00</td>
            </tr>
          </tbody>
        </table>
        
        <div class="total-section">
          <p>Subtotal: R$ 175,00</p>
          <p>Impostos: R$ 25,00</p>
          <p><strong>Total Geral: R$ 200,00</strong></p>
        </div>
        
        <div style="margin-top: 40px; text-align: center; color: #666;">
          <p>Esta é uma nota fiscal simplificada gerada automaticamente.</p>
          <p>Pedido #${10000 + orderId} - ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>
        
        <div class="no-print" style="text-align: center; margin-top: 30px;">
          <button onclick="window.print()" style="
            background-color: #007bff; 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 5px; 
            cursor: pointer; 
            font-size: 16px;
            margin-right: 10px;
          ">Imprimir</button>
          <button onclick="window.close()" style="
            background-color: #6c757d; 
            color: white; 
            border: none; 
            padding: 12px 24px; 
            border-radius: 5px; 
            cursor: pointer; 
            font-size: 16px;
          ">Fechar</button>
        </div>
      </body>
      </html>
    `;
    
    printWindow?.document.write(invoiceContent);
    printWindow?.document.close();
    
    printWindow?.focus();
  };

  const getStatusStyle = (status: string) => {
    const styles: StatusStyles = {
      'Embalado': {
        backgroundColor: '#fff3cd',
        color: '#856404',
        borderColor: '#ffeaa7'
      },
      'Enviado': {
        backgroundColor: '#d1ecf1',
        color: '#0c5460',
        borderColor: '#bee5eb'
      },
      'Entregue': {
        backgroundColor: '#d4edda',
        color: '#155724',
        borderColor: '#c3e6cb'
      }
    };
    return styles[status] || styles['Embalado'];
  }

    const handleStatusChange = (orderId: number, newStatus: string) => {
    setOrderStatuses(prev => ({
      ...prev,
      [orderId]: newStatus
    }));
    setOpenDropdown(null); // Close dropdown after selection
  };

  // Toggle dropdown
  const toggleDropdown = (orderId: number) => {
    setOpenDropdown(openDropdown === orderId ? null : orderId);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setOpenDropdown(null);
  };


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
                  
                  {[1, 2, 3, 4].map(productId => {
                    const isActive = productStatuses[productId];
                    
                    return (
                      <div key={productId} className="product-row" style={{
                        display: 'grid',
                        gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 100px',
                        gap: '15px',
                        padding: '15px 20px',
                        borderBottom: '1px solid #e0e0e0',
                        alignItems: 'center',
                        opacity: isActive ? 1 : 0.6 // Visual feedback for inactive products
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
                          <p style={{ fontWeight: '500', marginBottom: '5px' }}>Nome do Produto {productId}</p>
                          <p style={{ fontSize: '0.9rem', color: '#666' }}>Categoria</p>
                        </div>
                      
                        <div className="product-price">
                          R$XX.XX
                        </div>
                      
                        <div className="product-stock">
                          XX em estoque
                        </div>
                      
                        <div className="product-status">
                          <span 
                            onClick={() => toggleProductStatus(productId)}
                            style={{
                              display: 'inline-block',
                              padding: '5px 10px',
                              backgroundColor: isActive ? '#e8f5e8' : '#f5e8e8',
                              color: isActive ? '#2d5f2d' : '#d9534f',
                              borderRadius: '20px',
                              fontSize: '0.9rem',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease',
                              userSelect: 'none'
                            }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLElement).style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLElement).style.transform = 'scale(1)';
                            }}
                          >
                            {isActive ? 'Ativo' : 'Inativo'}
                          </span>
                        </div>
                      
                        <div className="product-actions" style={{
                          gap: '10px',
                        }}>
                          <button style={{
                            border: 'none',
                            background: 'none',
                            color: '#2d5f2d',
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
                    );
                  })}
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
                  overflow: 'hidden',
                  position: 'relative'
                }} onClick={handleClickOutside}>
                  <div className="orders-header" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 100px',
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
                    <div>Nota Fiscal</div>
                  </div>
                
                  {[1, 2, 3, 4].map(orderId => {
                    const currentStatus = orderStatuses[orderId as 1 | 2 | 3 | 4];
                    const statusStyle = getStatusStyle(currentStatus);
                    const isDropdownOpen = openDropdown === orderId;
                    
                    return (
                      <div key={orderId} className="order-row" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr 100px',
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
                      
                        <div className="order-status" style={{ position: 'relative' }}>
                          <span 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown(orderId);
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '5px',
                              padding: '8px 12px',
                              backgroundColor: statusStyle.backgroundColor,
                              color: statusStyle.color,
                              border: `1px solid ${statusStyle.borderColor}`,
                              borderRadius: '20px',
                              fontSize: '0.9rem',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              userSelect: 'none',
                              minWidth: '100px',
                              justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLElement).style.transform = 'translateY(-1px)';
                              (e.target as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLElement).style.transform = 'translateY(0)';
                              (e.target as HTMLElement).style.boxShadow = 'none';
                            }}
                          >
                            {currentStatus}
                            <svg 
                              width="12" 
                              height="12" 
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                              style={{
                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease'
                              }}
                            >
                              <path d="M7 10L12 15L17 10H7Z"/>
                            </svg>
                          </span>

                          {/* Dropdown Menu */}
                          {isDropdownOpen && (
                            <div style={{
                              position: 'absolute',
                              top: '100%',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              marginTop: '5px',
                              backgroundColor: 'white',
                              border: '1px solid #e0e0e0',
                              borderRadius: '12px',
                              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                              zIndex: 1000,
                              minWidth: '140px',
                              overflow: 'hidden',
                              animation: 'dropdownFadeIn 0.2s ease-out'
                            }}>
                              {statusOptions.map((status, index) => {
                                const optionStyle = getStatusStyle(status);
                                const isSelected = status === currentStatus;
                                
                                return (
                                  <div
                                    key={status}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleStatusChange(orderId, status);
                                    }}
                                    style={{
                                      padding: '12px 16px',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      backgroundColor: isSelected ? optionStyle.backgroundColor : 'transparent',
                                      color: isSelected ? optionStyle.color : '#333',
                                      borderBottom: index < statusOptions.length - 1 ? '1px solid #f0f0f0' : 'none',
                                      fontSize: '0.9rem',
                                      fontWeight: isSelected ? '500' : '400',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between'
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isSelected) {
                                        (e.target as HTMLElement).style.backgroundColor = '#f8f9fa';
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isSelected) {
                                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                                      }
                                    }}
                                  >
                                    {status}
                                    {isSelected && (
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
                                      </svg>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                        
                        <div className="nota-fiscal-action" style={{ 
                          display: 'flex', 
                          justifyContent: 'center' 
                        }}>
                          <button
                            onClick={() => generateNotaFiscal(orderId)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '8px',
                              borderRadius: '6px',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLElement).style.backgroundColor = '#f0f9ff';
                              (e.target as HTMLElement).style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLElement).style.backgroundColor = 'transparent';
                              (e.target as HTMLElement).style.transform = 'scale(1)';
                            }}
                            title="Gerar Nota Fiscal"
                          >
                            <svg 
                              width="20" 
                              height="20" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="#0ea5e9" 
                              strokeWidth="2"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14,2 14,8 20,8"/>
                              <line x1="16" y1="13" x2="8" y2="13"/>
                              <line x1="16" y1="17" x2="8" y2="17"/>
                              <polyline points="10,9 9,9 8,9"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <style>{`
                  @keyframes dropdownFadeIn {
                    from {
                      opacity: 0;
                      transform: translateX(-50%) translateY(-10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateX(-50%) translateY(0);
                    }
                  }
                `}</style>
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
