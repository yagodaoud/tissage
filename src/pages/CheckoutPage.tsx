import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface CheckoutPageProps {}

const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Brasil',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment and create the order
    setStep(3); // Move to confirmation step
  };

  return (
    <div className="checkout-page">
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '30px', color: 'var(--mineral-green)' }}>Checkout</h1>
        
        {/* Checkout Progress */}
        <div className="checkout-progress" style={{ 
          marginBottom: '40px',
          position: 'relative'
        }}>
          <div className="progress-bar" style={{ 
            height: '4px',
            backgroundColor: 'var(--light-gray)',
            position: 'relative',
            marginBottom: '20px',
            borderRadius: '2px'
          }}>
            <div className="progress-fill" style={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              backgroundColor: 'var(--mineral-green)',
              width: `${(step - 1) * 50}%`,
              transition: 'width 0.3s ease'
            }}></div>
          </div>
          
          <div className="progress-steps" style={{ 
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <div className="progress-step" style={{ 
              textAlign: 'center',
              color: step >= 1 ? 'var(--mineral-green)' : 'var(--medium-gray)',
              fontWeight: step === 1 ? 'bold' : 'normal'
            }}>
              <div className="step-number" style={{ 
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: step >= 1 ? 'var(--mineral-green)' : 'var(--light-gray)',
                color: step >= 1 ? 'white' : 'var(--medium-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px',
                fontWeight: 'bold'
              }}>1</div>
              Envio
            </div>
            
            <div className="progress-step" style={{ 
              textAlign: 'center',
              color: step >= 2 ? 'var(--mineral-green)' : 'var(--medium-gray)',
              fontWeight: step === 2 ? 'bold' : 'normal'
            }}>
              <div className="step-number" style={{ 
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: step >= 2 ? 'var(--mineral-green)' : 'var(--light-gray)',
                color: step >= 2 ? 'white' : 'var(--medium-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px',
                fontWeight: 'bold'
              }}>2</div>
              Pagamento
            </div>
            
            <div className="progress-step" style={{ 
              textAlign: 'center',
              color: step >= 3 ? 'var(--mineral-green)' : 'var(--medium-gray)',
              fontWeight: step === 3 ? 'bold' : 'normal'
            }}>
              <div className="step-number" style={{ 
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: step >= 3 ? 'var(--mineral-green)' : 'var(--light-gray)',
                color: step >= 3 ? 'white' : 'var(--medium-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px',
                fontWeight: 'bold'
              }}>3</div>
              Confirmação
            </div>
          </div>
        </div>
        
        <div className="checkout-content" style={{ 
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '40px'
        }}>
          <div className="checkout-form-container">
            {step === 1 && (
              <div className="shipping-step">
                <h2 style={{ marginBottom: '20px' }}>Informações de Envio</h2>
                
                <form style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Primeiro Nome
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Sobrenome
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                        required
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                      Endereço
                    </label>
                    <input 
                      type="text" 
                      id="address" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                      required
                    />
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label htmlFor="city" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Cidade
                      </label>
                      <input 
                        type="text" 
                        id="city" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="state" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Estado
                      </label>
                      <input 
                        type="text" 
                        id="state" 
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="zipCode" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Zip Code
                      </label>
                      <input 
                        type="text" 
                        id="zipCode" 
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="country" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                      País
                    </label>
                    <select 
                      id="country" 
                      name="country"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                      required
                    >
                      <option value="Brazil">Brasil</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Chile">Chile</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Peru">Peru</option>
                    </select>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      className="button"
                    >
                      Continuar para o Pagamento
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 2 && (
              <div className="payment-step">
                <h2 style={{ marginBottom: '20px' }}>Pagamento</h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                  <div className="form-group">
                    <label htmlFor="cardName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                      Nome no Cartão
                    </label>
                    <input 
                      type="text" 
                      id="cardName" 
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="cardNumber" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                      Número do Cartão
                    </label>
                    <input 
                      type="text" 
                      id="cardNumber" 
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      style={{ 
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px'
                      }}
                      required
                    />
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label htmlFor="expDate" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Data de Expiração
                      </label>
                      <input 
                        type="text" 
                        id="expDate" 
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="cvv" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        CVV
                      </label>
                      <input 
                        type="text" 
                        id="cvv" 
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="payment-methods" style={{ 
                    marginTop: '20px',
                    marginBottom: '20px'
                  }}>
                    <p style={{ marginBottom: '10px', fontWeight: '500' }}>Escolha o Método de Pagamento</p>
                    <div style={{ 
                      display: 'flex',
                      gap: '15px'
                    }}>
                      <div style={{ 
                        padding: '10px 15px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px',
                        backgroundColor: 'var(--light-gray)'
                      }}>
                        Visa
                      </div>
                      <div style={{ 
                        padding: '10px 15px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px',
                        backgroundColor: 'var(--light-gray)'
                      }}>
                        Mastercard
                      </div>
                      <div style={{ 
                        padding: '10px 15px',
                        border: '1px solid var(--medium-gray)',
                        borderRadius: '4px',
                        backgroundColor: 'var(--light-gray)'
                      }}>
                        PayPal
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginTop: '20px' 
                  }}>
                    <button 
                      type="button" 
                      onClick={handlePrevStep}
                      style={{ 
                        padding: '12px 24px',
                        backgroundColor: 'var(--light-gray)',
                        color: 'var(--dark-gray)',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Voltar
                    </button>
                    
                    <button 
                      type="submit" 
                      className="button"
                    >
                      Finalizar Compra
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 3 && (
              <div className="confirmation-step" style={{ 
                textAlign: 'center',
                backgroundColor: 'var(--strawberry-cream)',
                padding: '40px',
                borderRadius: '8px'
              }}>
                <div style={{ 
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--mineral-green)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white',
                  fontSize: '40px'
                }}>
                  ✓
                </div>
                
                <h2 style={{ marginBottom: '20px', color: 'var(--mineral-green)' }}>Compra Finalizada!</h2>
                
                <p style={{ marginBottom: '30px', fontSize: '18px' }}>
                  Obrigado por comprar conosco! Sua compra foi concluída com sucesso.
                </p>
                
                <div style={{ 
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '8px',
                  marginBottom: '30px',
                  textAlign: 'left'
                }}>
                  <h3 style={{ marginBottom: '15px' }}>Detalhes da Compra</h3>
                  
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid var(--light-gray)'
                  }}>
                    <span>Número do Pedido:</span>
                    <span style={{ fontWeight: 'bold' }}>#12345</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid var(--light-gray)'
                  }}>
                    <span>Data:</span>
                    <span>22 de maio de 2025</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    paddingBottom: '10px',
                    borderBottom: '1px solid var(--light-gray)'
                  }}>
                    <span>Total:</span>
                    <span style={{ fontWeight: 'bold' }}>R$130,80</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <span>Endereço de Entrega:</span>
                    <span style={{ textAlign: 'right' }}>
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.state} {formData.zipCode}<br />
                      {formData.country}
                    </span>
                  </div>
                </div>
                
                <p style={{ marginBottom: '30px' }}>
                  Um email de confirmação foi enviado para <strong>{formData.email}</strong>
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <Link to="/" className="button">
                    Voltar ao Site
                  </Link>
                  
                  <Link to="/profile#pedidos" className="button">
                    Acompanhar Pedido
                  </Link>
                  
                  <button 
                    className="button secondary"
                    onClick={() => window.print()}
                  >
                    Imprimir Comprovante
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="order-summary">
            <div style={{ 
              backgroundColor: 'var(--light-gray)',
              padding: '30px',
              borderRadius: '8px',
              position: 'sticky',
              top: '100px'
            }}>
              <h2 style={{ marginBottom: '20px' }}>Resumo da Compra</h2>
              
              <div className="cart-items" style={{ marginBottom: '30px' }}>
                <div className="cart-item" style={{ 
                  display: 'flex',
                  marginBottom: '15px',
                  paddingBottom: '15px',
                  borderBottom: '1px solid var(--medium-gray)'
                }}>
                  <div className="item-image" style={{ 
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'white',
                    marginRight: '15px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--medium-gray)'
                  }}>
                    Img
                  </div>
                  
                  <div className="item-details" style={{ flex: 1 }}>
                    <h4 style={{ marginBottom: '5px' }}>Cesto de Tecido à Mão</h4>
                    <p style={{ color: 'var(--dark-gray)', fontSize: '14px' }}>Quantidade: 1</p>
                  </div>
                  
                  <div className="item-price" style={{ fontWeight: 'bold' }}>
                    R$45,00
                  </div>
                </div>
                
                <div className="cart-item" style={{ 
                  display: 'flex',
                  marginBottom: '15px'
                }}>
                  <div className="item-image" style={{ 
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'white',
                    marginRight: '15px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--medium-gray)'
                  }}>
                    Img
                  </div>
                  
                  <div className="item-details" style={{ flex: 1 }}>
                    <h4 style={{ marginBottom: '5px' }}>Vaso de Cerâmica</h4>
                    <p style={{ color: 'var(--dark-gray)', fontSize: '14px' }}>Quantidade: 1</p>
                  </div>
                  
                  <div className="item-price" style={{ fontWeight: 'bold' }}>
                    R$65,00
                  </div>
                </div>
              </div>
              
              <div className="summary-row" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px'
              }}>
                <span>Sub-total</span>
                <span>R$110,00</span>
              </div>
              
              <div className="summary-row" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px'
              }}>
                <span>Frete</span>
                <span>R$12,00</span>
              </div>
              
              <div className="summary-row" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px'
              }}>
                <span>Impostos</span>
                <span>R$8,80</span>
              </div>
              
              <div className="summary-total" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                fontSize: '20px',
                borderTop: '1px solid var(--medium-gray)',
                paddingTop: '15px',
                marginTop: '15px'
              }}>
                <span>Total</span>
                <span>R$130,80</span>
              </div>
              
              {step === 3 && (
                <div style={{ 
                  backgroundColor: 'var(--mineral-green)',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '4px',
                  marginTop: '20px',
                  textAlign: 'center'
                }}>
                  Pagamento efetuado com sucesso
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
