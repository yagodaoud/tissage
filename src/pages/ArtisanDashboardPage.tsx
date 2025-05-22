import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ArtisanDashboardPageProps {}

const ArtisanDashboardPage: React.FC<ArtisanDashboardPageProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('products');
  
  return (
    <div className="artisan-dashboard-page">
      <div className="container" style={{ padding: '40px 0' }}>
        <h1 style={{ marginBottom: '30px', color: 'var(--mineral-green)' }}>Artisan Dashboard</h1>
        
        <div className="dashboard-layout" style={{ 
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
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
              <p style={{ color: 'var(--dark-gray)', marginBottom: '10px' }}>Handwoven Textiles</p>
              <Link to="/profile" style={{ color: 'var(--mineral-green)', fontSize: '0.9rem' }}>
                Edit Profile
              </Link>
            </div>
            
            <nav className="dashboard-nav">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <button 
                    onClick={() => setActiveTab('products')}
                    style={{ 
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: activeTab === 'products' ? 'var(--mineral-green)' : 'transparent',
                      color: activeTab === 'products' ? 'white' : 'var(--black)',
                      cursor: 'pointer',
                      fontWeight: activeTab === 'products' ? 'bold' : 'normal'
                    }}
                  >
                    Products
                  </button>
                </li>
                
                <li style={{ marginBottom: '10px' }}>
                  <button 
                    onClick={() => setActiveTab('orders')}
                    style={{ 
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: activeTab === 'orders' ? 'var(--mineral-green)' : 'transparent',
                      color: activeTab === 'orders' ? 'white' : 'var(--black)',
                      cursor: 'pointer',
                      fontWeight: activeTab === 'orders' ? 'bold' : 'normal'
                    }}
                  >
                    Orders
                  </button>
                </li>
                
                <li style={{ marginBottom: '10px' }}>
                  <button 
                    onClick={() => setActiveTab('statistics')}
                    style={{ 
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: activeTab === 'statistics' ? 'var(--mineral-green)' : 'transparent',
                      color: activeTab === 'statistics' ? 'white' : 'var(--black)',
                      cursor: 'pointer',
                      fontWeight: activeTab === 'statistics' ? 'bold' : 'normal'
                    }}
                  >
                    Statistics
                  </button>
                </li>
                
                <li style={{ marginBottom: '10px' }}>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    style={{ 
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 15px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: activeTab === 'settings' ? 'var(--mineral-green)' : 'transparent',
                      color: activeTab === 'settings' ? 'white' : 'var(--black)',
                      cursor: 'pointer',
                      fontWeight: activeTab === 'settings' ? 'bold' : 'normal'
                    }}
                  >
                    Settings
                  </button>
                </li>
              </ul>
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
                  <h2>My Products</h2>
                  <button className="button">Add New Product</button>
                </div>
                
                <div className="products-list" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  overflow: 'hidden'
                }}>
                  <div className="products-header" style={{ 
                    display: 'grid',
                    gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 100px',
                    gap: '15px',
                    padding: '15px 20px',
                    backgroundColor: 'var(--light-gray)',
                    fontWeight: 'bold'
                  }}>
                    <div>Image</div>
                    <div>Product</div>
                    <div>Price</div>
                    <div>Stock</div>
                    <div>Status</div>
                    <div>Actions</div>
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
                        <p style={{ fontWeight: '500', marginBottom: '5px' }}>Product Name</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--dark-gray)' }}>Category</p>
                      </div>
                      
                      <div className="product-price">
                        $XX.XX
                      </div>
                      
                      <div className="product-stock">
                        XX in stock
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
                          Active
                        </span>
                      </div>
                      
                      <div className="product-actions" style={{ 
                        display: 'flex',
                        gap: '10px'
                      }}>
                        <button style={{ 
                          border: 'none',
                          background: 'none',
                          color: 'var(--mineral-green)',
                          cursor: 'pointer'
                        }}>
                          Edit
                        </button>
                        
                        <button style={{ 
                          border: 'none',
                          background: 'none',
                          color: '#d9534f',
                          cursor: 'pointer'
                        }}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div className="orders-tab">
                <h2 style={{ marginBottom: '30px' }}>Recent Orders</h2>
                
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
                    <div>Order ID</div>
                    <div>Customer</div>
                    <div>Date</div>
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
                        Customer Name
                      </div>
                      
                      <div className="order-date">
                        May 20, 2025
                      </div>
                      
                      <div className="order-total">
                        $XX.XX
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
                          Shipped
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'statistics' && (
              <div className="statistics-tab">
                <h2 style={{ marginBottom: '30px' }}>Performance Statistics</h2>
                
                <div className="stats-cards" style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
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
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Total Sales</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--mineral-green)' }}>$1,234</p>
                  </div>
                  
                  <div className="stat-card" style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Orders</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--mineral-green)' }}>42</p>
                  </div>
                  
                  <div className="stat-card" style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Products</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--mineral-green)' }}>12</p>
                  </div>
                  
                  <div className="stat-card" style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    padding: '20px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{ color: 'var(--dark-gray)', marginBottom: '10px', fontSize: '1rem' }}>Avg. Rating</h3>
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
                  <h3 style={{ marginBottom: '20px' }}>Sales Over Time</h3>
                  
                  <div className="chart-placeholder" style={{ 
                    height: '300px',
                    backgroundColor: 'var(--light-gray)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--dark-gray)'
                  }}>
                    Sales Chart Visualization
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="settings-tab">
                <h2 style={{ marginBottom: '30px' }}>Account Settings</h2>
                
                <div className="settings-form" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '30px',
                  marginBottom: '30px'
                }}>
                  <h3 style={{ marginBottom: '20px' }}>Personal Information</h3>
                  
                  <form style={{ display: 'grid', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div className="form-group">
                        <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                          First Name
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
                          Last Name
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
                        defaultValue="maria@example.com"
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
                        Specialty
                      </label>
                      <input 
                        type="text" 
                        id="specialty" 
                        defaultValue="Handwoven Textiles"
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
                        Bio
                      </label>
                      <textarea 
                        id="bio" 
                        rows={4}
                        defaultValue="Maria has been weaving traditional Brazilian textiles for over 20 years, using techniques passed down through generations in her family."
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
                      Save Changes
                    </button>
                  </form>
                </div>
                
                <div className="password-form" style={{ 
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  padding: '30px'
                }}>
                  <h3 style={{ marginBottom: '20px' }}>Change Password</h3>
                  
                  <form style={{ display: 'grid', gap: '20px' }}>
                    <div className="form-group">
                      <label htmlFor="currentPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                        Current Password
                      </label>
                      <input 
                        type="password" 
                        id="currentPassword" 
                        placeholder="Enter your current password"
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
                        New Password
                      </label>
                      <input 
                        type="password" 
                        id="newPassword" 
                        placeholder="Enter your new password"
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
                        Confirm New Password
                      </label>
                      <input 
                        type="password" 
                        id="confirmNewPassword" 
                        placeholder="Confirm your new password"
                        style={{ 
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--medium-gray)',
                          borderRadius: '4px'
                        }}
                      />
                    </div>
                    
                    <button type="button" className="button" style={{ justifySelf: 'start' }}>
                      Update Password
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
