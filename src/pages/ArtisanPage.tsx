import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artisans } from '../data/mockData';

const ArtisanPage = () => {
  const [activeTab, setActiveTab] = useState('products');

  // Em um app real, pegaríamos o ID do artesão via parâmetros da URL
  // Para esse mock, vamos usar apenas o primeiro artesão
  const artisan = artisans[0];

  return (
    <div className="artisan-page">
      <div className="container" style={{ padding: '40px 0' }}>
        <div className="breadcrumbs" style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ color: 'var(--dark-gray)' }}>Início</Link> &gt;
          <Link to="/artisans" style={{ color: 'var(--dark-gray)', margin: '0 5px' }}>Artesãos</Link> &gt;
          <span style={{ color: 'var(--mineral-green)' }}>{artisan.name}</span>
        </div>

        <div className="artisan-header" style={{
          display: 'flex',
          gap: '30px',
          marginBottom: '40px'
        }}>
          <div className="artisan-avatar" style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#999',
            flexShrink: 0
          }}>
            Avatar
          </div>

          <div className="artisan-info">
            <h1 style={{ marginBottom: '10px', color: 'var(--mineral-green)' }}>{artisan.name}</h1>
            <p style={{ marginBottom: '10px', fontSize: '1.1rem' }}>{artisan.location} • {artisan.specialty}</p>
            <div className="rating" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px'
            }}>
              <div className="stars" style={{ color: 'goldenrod', marginRight: '10px' }}>
                {'★'.repeat(Math.floor(artisan.rating))}
                {'☆'.repeat(5 - Math.floor(artisan.rating))}
              </div>
              <span>{artisan.rating.toFixed(1)}</span>
            </div>
            <p style={{ lineHeight: '1.6', maxWidth: '600px' }}>{artisan.bio}</p>
          </div>
        </div>

        <div className="artisan-tabs" style={{ marginBottom: '30px' }}>
          <div className="tabs-header" style={{
            display: 'flex',
            borderBottom: '1px solid var(--medium-gray)'
          }}>
            <button
              className={`tab ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
              style={{
                padding: '10px 20px',
                backgroundColor: activeTab === 'products' ? 'var(--strawberry-cream)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'products' ? '3px solid var(--mineral-green)' : 'none',
                cursor: 'pointer',
                fontWeight: activeTab === 'products' ? 'bold' : 'normal'
              }}
            >
              Produtos
            </button>

            <button
              className={`tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
              style={{
                padding: '10px 20px',
                backgroundColor: activeTab === 'about' ? 'var(--strawberry-cream)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'about' ? '3px solid var(--mineral-green)' : 'none',
                cursor: 'pointer',
                fontWeight: activeTab === 'about' ? 'bold' : 'normal'
              }}
            >
              Sobre
            </button>

            <button
              className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
              style={{
                padding: '10px 20px',
                backgroundColor: activeTab === 'contact' ? 'var(--strawberry-cream)' : 'transparent',
                border: 'none',
                borderBottom: activeTab === 'contact' ? '3px solid var(--mineral-green)' : 'none',
                cursor: 'pointer',
                fontWeight: activeTab === 'contact' ? 'bold' : 'normal'
              }}
            >
              Contato
            </button>
          </div>

          <div className="tab-content" style={{ padding: '30px 0' }}>
            {activeTab === 'products' && (
              <div className="products-tab">
                <h2 style={{ marginBottom: '20px' }}>Produtos de {artisan.name}</h2>

                <div className="products-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '30px'
                }}>
                  {[1, 2, 3, 4].map(productId => (
                    <div key={productId} className="product-card">
                      <Link to={`/produtos/${productId}`}>
                        <div className="product-image" style={{
                          height: '200px',
                          backgroundColor: '#f0f0f0',
                          marginBottom: '15px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#999'
                        }}>
                          Imagem do Produto
                        </div>
                        <div className="product-info" style={{ padding: '0 15px 15px' }}>
                          <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Nome do Produto</h3>
                          <p style={{ color: 'var(--dark-gray)', marginBottom: '8px' }}>Categoria</p>
                          <p style={{ fontWeight: 'bold', color: 'var(--mineral-green)' }}>R$ XX,XX</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="about-tab">
                <h2 style={{ marginBottom: '20px' }}>Sobre {artisan.name}</h2>

                <div style={{ maxWidth: '800px' }}>
                  <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                    {artisan.bio}
                  </p>

                  <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                  </p>

                  <h3 style={{ marginBottom: '15px', marginTop: '30px' }}>Processo de Produção</h3>
                  <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
                  </p>

                  <h3 style={{ marginBottom: '15px', marginTop: '30px' }}>Materiais Utilizados</h3>
                  <p style={{ lineHeight: '1.6' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="contact-tab">
                <h2 style={{ marginBottom: '20px' }}>Contato com {artisan.name}</h2>

                <div style={{ maxWidth: '600px' }}>
                  <p style={{ marginBottom: '30px' }}>
                    Tem dúvidas sobre os produtos ou deseja fazer um pedido personalizado? Envie uma mensagem diretamente para {artisan.name}.
                  </p>

                  <form style={{ display: 'grid', gap: '15px' }}>
                    <div>
                      <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Seu Nome</label>
                      <input type="text" id="name" style={{ width: '100%', padding: '10px' }} />
                    </div>

                    <div>
                      <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Seu Email</label>
                      <input type="email" id="email" style={{ width: '100%', padding: '10px' }} />
                    </div>

                    <div>
                      <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Mensagem</label>
                      <textarea id="message" rows={5} style={{ width: '100%', padding: '10px' }}></textarea>
                    </div>

                    <button type="button" className="button" style={{ justifySelf: 'start', marginTop: '10px' }}>
                      Enviar Mensagem
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

export default ArtisanPage;
