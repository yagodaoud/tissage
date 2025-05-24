import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products, artisans } from '../data/mockData';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [artisan, setArtisan] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Find the product based on the ID from URL params
    if (id) {
      const productId = parseInt(id);
      const foundProduct = products.find(p => p.id === productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find the associated artisan
        const foundArtisan = artisans.find(a => a.id === foundProduct.artisanId);
        if (foundArtisan) {
          setArtisan(foundArtisan);
        }
      }
    }
  }, [id]);

  if (!product || !artisan) {
    return (
      <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>
        <p>Loading product details...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
    // In a real app, this would add the product to the cart state/context
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="product-detail-page">
      <div className="container" style={{ padding: '40px 0' }}>
        <div className="breadcrumbs" style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ color: 'var(--dark-gray)' }}>Home</Link> &gt; 
          <Link to="/produtos" style={{ color: 'var(--dark-gray)', margin: '0 5px' }}>Produtos</Link> &gt; 
          <span style={{ color: 'var(--mineral-green)' }}>{product.name}</span>
        </div>
        
        <div className="product-detail" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div className="product-images">
            <div className="main-image" style={{ 
              height: '400px', 
              backgroundColor: '#f0f0f0',
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#999'
            }}>
              Imagem {activeImage + 1}
            </div>
            
            <div className="image-thumbnails" style={{ 
              display: 'flex', 
              gap: '10px'
            }}>
              {[0, 1].map((index) => (
                <div 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundColor: activeImage === index ? 'var(--strawberry-cream)' : '#f0f0f0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#999',
                    border: activeImage === index ? '2px solid var(--mineral-green)' : 'none'
                  }}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
          
          <div className="product-info">
            <h1 style={{ marginBottom: '10px', color: 'var(--mineral-green)' }}>{product.name}</h1>
            
            <div className="artisan-link" style={{ marginBottom: '20px' }}>
              <p>Por <Link to={`/artisans/${artisan.id}`} style={{ color: 'var(--mineral-green)', fontWeight: 'bold' }}>{artisan.name}</Link></p>
            </div>
            
            <div className="price" style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '20px',
              color: 'var(--mineral-green)'
            }}>
              R${product.price.toFixed(2)}
            </div>
            
            <div className="description" style={{ marginBottom: '30px' }}>
              <p style={{ lineHeight: '1.6' }}>{product.description}</p>
            </div>
            
            <div className="product-meta" style={{ 
              marginBottom: '30px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              rowGap: '15px'
            }}>
              <div className="meta-item">
                <strong>Categoria:</strong> {product.category}
              </div>
              
              <div className="meta-item">
                <strong>Materiais:</strong> {product.materials.join(', ')}
              </div>
              
              <div className="meta-item">
                <strong>Dimensões:</strong> {product.dimensions}
              </div>
              
              <div className="meta-item">
                <strong>Em estoque:</strong> {product.inStock}
              </div>
            </div>
            
            <div className="add-to-cart" style={{ 
              display: 'flex', 
              gap: '15px',
              alignItems: 'center',
              marginBottom: '30px'
            }}>
              <div className="quantity">
                <label htmlFor="quantity" style={{ marginRight: '10px' }}>Quantidade:</label>
                <select 
                  id="quantity" 
                  value={quantity} 
                  onChange={handleQuantityChange}
                  style={{ padding: '8px 15px' }}
                >
                  {[...Array(Math.min(10, product.inStock))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className="button"
                style={{ flex: 1 }}
              >
                Adicionar ao carrinho
              </button>
            </div>
            
            <div className="shipping-info" style={{ 
              backgroundColor: 'var(--light-gray)',
              padding: '15px',
              borderRadius: '8px'
            }}>
              <p><strong>Envio:</strong> Itens feitos à mão geralmente são enviados em 1-2 semanas</p>
            </div>
          </div>
        </div>
        
        <div className="artisan-section" style={{ 
          backgroundColor: 'var(--strawberry-cream)',
          padding: '30px',
          borderRadius: '8px',
          marginBottom: '40px'
        }}>
          <h2 style={{ marginBottom: '15px' }}>Sobre o artesão</h2>
          
          <div style={{ 
            display: 'flex', 
            gap: '20px',
            alignItems: 'center'
          }}>
            <div className="artisan-avatar" style={{ 
              width: '100px',
              height: '100px',
              backgroundColor: '#f0f0f0',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#999'
            }}>
              Avatar
            </div>
            
            <div className="artisan-info">
              <h3 style={{ marginBottom: '5px' }}>{artisan.name}</h3>
              <p style={{ marginBottom: '10px' }}>{artisan.location} • {artisan.specialty}</p>
              <p style={{ lineHeight: '1.6' }}>{artisan.bio}</p>
              <Link to={`/artisans/${artisan.id}`} style={{ 
                display: 'inline-block',
                marginTop: '10px',
                color: 'var(--mineral-green)',
                fontWeight: 'bold'
              }}>
                Ver perfil do artesão
              </Link>
            </div>
          </div>
        </div>
        
        <div className="related-products">
          <h2 style={{ marginBottom: '20px' }}>Você pode gostar</h2>
          
          <div className="products-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: '20px'
          }}>
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="product-card">
                  <Link to={`/produtos/${relatedProduct.id}`}>
                    <div className="product-image" style={{ 
                      height: '150px', 
                      backgroundColor: '#f0f0f0', 
                      marginBottom: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#999'
                    }}>
                      Image
                    </div>
                    <div className="product-info" style={{ padding: '0 10px 10px' }}>
                      <h3 style={{ fontSize: '1rem', marginBottom: '5px' }}>{relatedProduct.name}</h3>
                      <p style={{ fontWeight: 'bold', color: 'var(--mineral-green)' }}>${relatedProduct.price.toFixed(2)}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
