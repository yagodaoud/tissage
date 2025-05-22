import React from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/mockData';

const ProductListPage = () => {
  // Em um app real, usaríamos parâmetros de consulta para filtrar produtos
  // Para este mock, vamos apenas mostrar todos os produtos
  
  return (
    <div className="product-list-page">
      <div className="container" style={{ padding: '40px 0' }}>
        <div className="page-header" style={{ marginBottom: '30px' }}>
          <h1>Todos os Produtos</h1>
          <p>Descubra itens artesanais únicos feitos por talentosos artesãos</p>
        </div>
        
        <div className="product-filters" style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '30px',
          padding: '15px',
          backgroundColor: 'var(--light-gray)',
          borderRadius: '8px'
        }}>
          <div className="filter-categories">
            <label htmlFor="category-filter">Categoria:</label>
            <select id="category-filter" style={{ marginLeft: '10px', padding: '5px 10px' }}>
              <option value="">Todas as Categorias</option>
              {categories.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-sort">
            <label htmlFor="sort-filter">Ordenar por:</label>
            <select id="sort-filter" style={{ marginLeft: '10px', padding: '5px 10px' }}>
              <option value="featured">Destaques</option>
              <option value="price-low">Preço: Menor para Maior</option>
              <option value="price-high">Preço: Maior para Menor</option>
              <option value="newest">Mais Recentes</option>
            </select>
          </div>
        </div>
        
        <div className="products-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '30px',
          marginBottom: '40px'
        }}>
          {products.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
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
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{product.name}</h3>
                  <p style={{ color: 'var(--dark-gray)', marginBottom: '8px' }}>{product.category}</p>
                  <p style={{ fontWeight: 'bold', color: 'var(--mineral-green)' }}>R${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="pagination" style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '10px'
        }}>
          <button className="pagination-button" style={{
            padding: '8px 15px',
            backgroundColor: 'var(--light-gray)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Anterior</button>
          
          <button className="pagination-button" style={{
            padding: '8px 15px',
            backgroundColor: 'var(--mineral-green)',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>1</button>
          
          <button className="pagination-button" style={{
            padding: '8px 15px',
            backgroundColor: 'var(--light-gray)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>2</button>
          
          <button className="pagination-button" style={{
            padding: '8px 15px',
            backgroundColor: 'var(--light-gray)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
