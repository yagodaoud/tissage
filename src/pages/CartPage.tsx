import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Manta de Algodão Tecida à Mão', price: 89.99, quantity: 1, image: '/assets/products/throw1.jpg' },
    { id: 4, name: 'Tigela de Madeira', price: 65.00, quantity: 2, image: '/assets/products/bowl1.jpg' },
  ]);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const subtotal = calculateSubtotal();
  const shipping = 12.99;
  const total = subtotal + shipping;
  
  return (
    <div className="cart-page">
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '30px' }}>Seu Carrinho</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart" style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Seu carrinho está vazio</p>
            <Link to="/produtos" className="button">Continuar Comprando</Link>
          </div>
        ) : (
          <div className="cart-content" style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            gap: '40px'
          }}>
            <div className="cart-items">
              <div className="cart-header" style={{ 
                display: 'grid',
                gridTemplateColumns: '100px 1fr 150px 150px 50px',
                gap: '20px',
                padding: '0 0 15px 0',
                borderBottom: '1px solid var(--medium-gray)',
                fontWeight: 'bold'
              }}>
                <div>Produto</div>
                <div>Descrição</div>
                <div style={{ textAlign: 'center' }}>Quantidade</div>
                <div style={{ textAlign: 'right' }}>Preço</div>
                <div></div>
              </div>
              
              {cartItems.map(item => (
                <div key={item.id} className="cart-item" style={{ 
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr 150px 150px 50px',
                  gap: '20px',
                  padding: '20px 0',
                  borderBottom: '1px solid var(--medium-gray)',
                  alignItems: 'center'
                }}>
                  <div className="item-image" style={{ 
                    height: '80px',
                    backgroundColor: '#f0f0f0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#999'
                  }}>
                    Imagem
                  </div>
                  
                  <div className="item-details">
                    <h3 style={{ marginBottom: '5px' }}>
                      <Link to={`/produtos/${item.id}`} style={{ color: 'var(--mineral-green)' }}>
                        {item.name}
                      </Link>
                    </h3>
                    <p style={{ color: 'var(--dark-gray)' }}>Item feito à mão</p>
                  </div>
                  
                  <div className="item-quantity" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ 
                          width: '30px', 
                          height: '30px', 
                          border: '1px solid var(--medium-gray)',
                          background: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        -
                      </button>
                      
                      <span style={{ 
                        padding: '0 15px',
                        minWidth: '40px',
                        textAlign: 'center'
                      }}>
                        {item.quantity}
                      </span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ 
                          width: '30px', 
                          height: '30px', 
                          border: '1px solid var(--medium-gray)',
                          background: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-price" style={{ textAlign: 'right' }}>
                    <p>R${(item.price * item.quantity).toFixed(2)}</p>
                    <p style={{ color: 'var(--dark-gray)', fontSize: '0.9rem' }}>R${item.price.toFixed(2)} cada</p>
                  </div>
                  
                  <div className="item-remove">
                    <button 
                      onClick={() => updateQuantity(item.id, 0)}
                      style={{ 
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'var(--dark-gray)'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary" style={{ 
              backgroundColor: 'var(--light-gray)',
              padding: '30px',
              borderRadius: '8px',
              alignSelf: 'start'
            }}>
              <h2 style={{ marginBottom: '20px' }}>Resumo do Pedido</h2>
              
              <div className="summary-row" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px'
              }}>
                <span>Subtotal</span>
                <span>R${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px'
              }}>
                <span>Frete</span>
                <span>R${shipping.toFixed(2)}</span>
              </div>
              
              <div className="summary-total" style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                marginTop: '20px',
                paddingTop: '20px',
                borderTop: '1px solid var(--medium-gray)'
              }}>
                <span>Total</span>
                <span>R${total.toFixed(2)}</span>
              </div>
              
              <Link 
                to="/checkout" 
                className="button"
                style={{ 
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '30px',
                  padding: '15px'
                }}
              >
                Finalizar Compra
              </Link>
              
              <Link 
                to="/produtos" 
                style={{ 
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '15px',
                  color: 'var(--mineral-green)'
                }}
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
