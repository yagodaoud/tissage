import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/mockData';

const ProductListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div className="product-list-page">
      <style>{`
        .filters-container {
          background: linear-gradient(135deg, #516a5b 0%, #6b7c66 100%);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 40px;
          box-shadow: 0 8px 32px rgba(81, 106, 91, 0.15);
          border: 1px solid rgba(247, 213, 213, 0.2);
        }
        
        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .filters-title {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .toggle-filters-btn {
          background: rgba(247, 213, 213, 0.2);
          border: 1px solid #f7d5d5;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          display: none;
        }
        
        .toggle-filters-btn:hover {
          background: rgba(247, 213, 213, 0.3);
        }
        
        .filters-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
        }
        
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 200px;
        }
        
        .filter-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 4px;
        }
        
        .filter-select {
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 0.95rem;
          color: #516a5b;
          cursor: pointer;
          transition: all 0.3s ease;
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23516a5b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 12px center;
          background-repeat: no-repeat;
          background-size: 16px;
          padding-right: 40px;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: #f7d5d5;
          box-shadow: 0 0 0 3px rgba(247, 213, 213, 0.3);
        }
        
        .filter-select:hover {
          background: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .results-summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 16px 0;
          border-bottom: 2px solid #f0f0f0;
        }
        
        .results-count {
          color: #516a5b;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        .view-toggle {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .view-btn {
          padding: 8px 12px;
          border: 2px solid #e0e0e0;
          background: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #666;
        }
        
        .view-btn.active {
          border-color: #516a5b;
          background: #516a5b;
          color: white;
        }
        
        .view-btn:hover:not(.active) {
          border-color: #f7d5d5;
          color: #516a5b;
        }
        
        .product-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #f0f0f0;
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(81, 106, 91, 0.15);
          border-color: #f7d5d5;
        }
        
        .product-image {
          height: 220px;
          background: linear-gradient(135deg, #f8f9fa 0%, #f0f0f0 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #999;
          font-weight: 500;
          position: relative;
          overflow: hidden;
        }
        
        .product-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(247, 213, 213, 0.1) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .product-card:hover .product-image::before {
          transform: translateX(100%);
        }
        
        .product-info {
          padding: 20px;
        }
        
        .product-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
          line-height: 1.3;
        }
        
        .product-category {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }
        
        .product-price {
          font-weight: 700;
          color: #516a5b;
          font-size: 1.2rem;
        }
        
        @media (max-width: 768px) {
          .toggle-filters-btn {
            display: block;
          }
          
          .filters-content {
            display: ${showFilters ? 'flex' : 'none'};
            flex-direction: column;
            gap: 20px;
            margin-top: 16px;
          }
          
          .filter-group {
            min-width: auto;
            width: 100%;
          }
          
          .results-summary {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
        }
      `}</style>
      
      <div className="container" style={{ padding: '40px 20px' }}>
        <div className="page-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            color: '#516a5b', 
            marginBottom: '12px',
            fontWeight: '700'
          }}>
            Todos os Produtos
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Descubra itens artesanais únicos feitos por talentosos artesãos
          </p>
        </div>
        
        <div className="filters-container">
          <div className="filters-header">
            <h3 className="filters-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              Filtros
            </h3>
            <button 
              className="toggle-filters-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Ocultar' : 'Mostrar'} Filtros
            </button>
          </div>
          
          <div className="filters-content">
            <div className="filter-group">
              <label className="filter-label" htmlFor="category-filter">
                Categoria
              </label>
              <select 
                id="category-filter" 
                className="filter-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Todas as Categorias</option>
                {categories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label className="filter-label" htmlFor="sort-filter">
                Ordenar por
              </label>
              <select 
                id="sort-filter" 
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Destaques</option>
                <option value="price-low">Preço: Menor para Maior</option>
                <option value="price-high">Preço: Maior para Menor</option>
                <option value="newest">Mais Recentes</option>
                <option value="popularity">Mais Populares</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="results-summary">
          <div className="results-count">
            Mostrando {products.length} produtos
          </div>
          <div className="view-toggle">
            <button className="view-btn active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button className="view-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="products-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '30px',
          marginBottom: '50px'
        }}>
          {products.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/produtos/${product.id}`} style={{ textDecoration: 'none' }}>
                <div className="product-image">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21,15 16,10 5,21"></polyline>
                  </svg>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">R$ {product.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="pagination" style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '8px',
          marginTop: '40px'
        }}>
          {[
            { text: 'Anterior', active: false },
            { text: '1', active: true },
            { text: '2', active: false },
            { text: '3', active: false },
            { text: 'Próximo', active: false }
          ].map((btn, index) => (
            <button 
              key={index}
              style={{
                padding: '12px 18px',
                backgroundColor: btn.active ? '#516a5b' : 'white',
                color: btn.active ? 'white' : '#516a5b',
                border: `2px solid ${btn.active ? '#516a5b' : '#e0e0e0'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                minWidth: '44px'
              }}
              onMouseOver={(e) => {
                const target = e.target as HTMLButtonElement;
                if (!btn.active) {
                  target.style.borderColor = '#f7d5d5';
                  target.style.color = '#516a5b';
                }
              }}
              onMouseOut={(e) => {
                const target = e.target as HTMLButtonElement;
                if (!btn.active) {
                  target.style.borderColor = '#e0e0e0';
                  target.style.color = '#516a5b';
                }
              }}
            >
              {btn.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;