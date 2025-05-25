import React, { useState } from 'react';
import './AdminDashboard.css';

// Componentes de gráficos fictícios - em um projeto real, você usaria bibliotecas como Chart.js ou Recharts
const GraficoVendas = () => (
  <div className="grafico-placeholder">
    <div className="grafico-barras">
      <div className="barra" style={{ height: '60%' }}><span>Jan</span></div>
      <div className="barra" style={{ height: '75%' }}><span>Fev</span></div>
      <div className="barra" style={{ height: '45%' }}><span>Mar</span></div>
      <div className="barra" style={{ height: '90%' }}><span>Abr</span></div>
      <div className="barra" style={{ height: '70%' }}><span>Mai</span></div>
      <div className="barra" style={{ height: '80%' }}><span>Jun</span></div>
    </div>
  </div>
);

const GraficoPizza = () => (
  <div className="grafico-placeholder">
    <div className="grafico-pizza">
      <div className="fatia fatia1"></div>
      <div className="fatia fatia2"></div>
      <div className="fatia fatia3"></div>
      <div className="centro"></div>
    </div>
    <div className="legenda-pizza">
      <div className="legenda-item"><span className="cor cor1"></span>Têxteis (45%)</div>
      <div className="legenda-item"><span className="cor cor2"></span>Cerâmica (30%)</div>
      <div className="legenda-item"><span className="cor cor3"></span>Outros (25%)</div>
    </div>
  </div>
);

const GraficoLinha = () => (
  <div className="grafico-placeholder">
    <div className="grafico-linha">
      <svg viewBox="0 0 500 200" className="chart">
        <polyline
          fill="none"
          stroke="#516a5b"
          strokeWidth="3"
          points="
            0,120
            100,60
            200,80
            300,20
            400,90
            500,40
          "
        />
      </svg>
    </div>
  </div>
);

interface DashboardAdminProps {}

const AdminDashboard: React.FC<DashboardAdminProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('visaogeral');
  
  // Dados mockados
  const resumoVendas = {
    totalVendas: 'R$ 125.430,00',
    mediaTicket: 'R$ 230,50',
    totalPedidos: 544,
    taxaCrescimento: '12,5%'
  };
  
  const artesaos = [
    { id: 1, nome: 'Maria Oliveira', categoria: 'Têxteis', produtos: 24, vendas: 'R$ 12.450,00', avaliacao: 4.8 },
    { id: 2, nome: 'João Santos', categoria: 'Cerâmica', produtos: 18, vendas: 'R$ 9.870,00', avaliacao: 4.7 },
    { id: 3, nome: 'Ana Silva', categoria: 'Joalheria', produtos: 32, vendas: 'R$ 15.320,00', avaliacao: 4.9 },
    { id: 4, nome: 'Carlos Mendes', categoria: 'Madeira', produtos: 15, vendas: 'R$ 7.650,00', avaliacao: 4.6 },
    { id: 5, nome: 'Fernanda Lima', categoria: 'Têxteis', produtos: 28, vendas: 'R$ 13.780,00', avaliacao: 4.8 },
    { id: 6, nome: 'Roberto Alves', categoria: 'Cerâmica', produtos: 21, vendas: 'R$ 10.230,00', avaliacao: 4.5 },
    { id: 7, nome: 'Juliana Costa', categoria: 'Joalheria', produtos: 19, vendas: 'R$ 11.450,00', avaliacao: 4.7 },
    { id: 8, nome: 'Pedro Souza', categoria: 'Madeira', produtos: 12, vendas: 'R$ 6.890,00', avaliacao: 4.4 }
  ];
  
  const pedidos = [
    { id: '12345', cliente: 'Mariana Rodrigues', data: '24/05/2025', valor: 'R$ 345,00', status: 'Entregue', itens: 3 },
    { id: '12346', cliente: 'Rafael Oliveira', data: '23/05/2025', valor: 'R$ 180,00', status: 'Em trânsito', itens: 1 },
    { id: '12347', cliente: 'Camila Santos', data: '22/05/2025', valor: 'R$ 520,00', status: 'Processando', itens: 4 },
    { id: '12348', cliente: 'Lucas Ferreira', data: '21/05/2025', valor: 'R$ 275,00', status: 'Entregue', itens: 2 },
    { id: '12349', cliente: 'Isabela Martins', data: '20/05/2025', valor: 'R$ 430,00', status: 'Entregue', itens: 3 },
    { id: '12350', cliente: 'Thiago Costa', data: '19/05/2025', valor: 'R$ 190,00', status: 'Cancelado', itens: 1 },
    { id: '12351', cliente: 'Amanda Lima', data: '18/05/2025', valor: 'R$ 310,00', status: 'Entregue', itens: 2 },
    { id: '12352', cliente: 'Bruno Alves', data: '17/05/2025', valor: 'R$ 450,00', status: 'Em trânsito', itens: 3 }
  ];
  
  const produtos = [
    { id: 1, nome: 'Cesto Artesanal', artesao: 'Maria Oliveira', categoria: 'Têxteis', preco: 'R$ 120,00', estoque: 15, vendas: 42 },
    { id: 2, nome: 'Vaso de Cerâmica', artesao: 'João Santos', categoria: 'Cerâmica', preco: 'R$ 125,00', estoque: 8, vendas: 36 },
    { id: 3, nome: 'Colar Artesanal', artesao: 'Ana Silva', categoria: 'Joalheria', preco: 'R$ 65,00', estoque: 22, vendas: 58 },
    { id: 4, nome: 'Tábua de Corte', artesao: 'Carlos Mendes', categoria: 'Madeira', preco: 'R$ 55,00', estoque: 12, vendas: 29 },
    { id: 5, nome: 'Tapete Feito à Mão', artesao: 'Fernanda Lima', categoria: 'Têxteis', preco: 'R$ 180,00', estoque: 6, vendas: 18 },
    { id: 6, nome: 'Conjunto de Xícaras', artesao: 'Roberto Alves', categoria: 'Cerâmica', preco: 'R$ 95,00', estoque: 10, vendas: 24 },
    { id: 7, nome: 'Brincos Artesanais', artesao: 'Juliana Costa', categoria: 'Joalheria', preco: 'R$ 45,00', estoque: 18, vendas: 47 },
    { id: 8, nome: 'Porta-Retrato', artesao: 'Pedro Souza', categoria: 'Madeira', preco: 'R$ 40,00', estoque: 14, vendas: 32 }
  ];
  
  const clientes = [
    { id: 1, nome: 'Mariana Rodrigues', email: 'mariana@email.com', pedidos: 8, valorTotal: 'R$ 1.450,00', ultimaCompra: '24/05/2025' },
    { id: 2, nome: 'Rafael Oliveira', email: 'rafael@email.com', pedidos: 5, valorTotal: 'R$ 980,00', ultimaCompra: '23/05/2025' },
    { id: 3, nome: 'Camila Santos', email: 'camila@email.com', pedidos: 12, valorTotal: 'R$ 2.340,00', ultimaCompra: '22/05/2025' },
    { id: 4, nome: 'Lucas Ferreira', email: 'lucas@email.com', pedidos: 3, valorTotal: 'R$ 520,00', ultimaCompra: '21/05/2025' },
    { id: 5, nome: 'Isabela Martins', email: 'isabela@email.com', pedidos: 7, valorTotal: 'R$ 1.280,00', ultimaCompra: '20/05/2025' },
    { id: 6, nome: 'Thiago Costa', email: 'thiago@email.com', pedidos: 4, valorTotal: 'R$ 760,00', ultimaCompra: '19/05/2025' },
    { id: 7, nome: 'Amanda Lima', email: 'amanda@email.com', pedidos: 9, valorTotal: 'R$ 1.870,00', ultimaCompra: '18/05/2025' },
    { id: 8, nome: 'Bruno Alves', email: 'bruno@email.com', pedidos: 6, valorTotal: 'R$ 1.120,00', ultimaCompra: '17/05/2025' }
  ];
  
  return (
    <div className="dashboard-admin-page">
      <div className="container">
        <h1 className="dashboard-titulo">Painel de Administração</h1>
        
        <div className="dashboard-tabs">
          <button 
            className={`tab-button ${activeTab === 'visaogeral' ? 'active' : ''}`}
            onClick={() => setActiveTab('visaogeral')}
          >
            Visão Geral
          </button>
          <button 
            className={`tab-button ${activeTab === 'artesaos' ? 'active' : ''}`}
            onClick={() => setActiveTab('artesaos')}
          >
            Artesãos
          </button>
          <button 
            className={`tab-button ${activeTab === 'pedidos' ? 'active' : ''}`}
            onClick={() => setActiveTab('pedidos')}
          >
            Pedidos
          </button>
          <button 
            className={`tab-button ${activeTab === 'produtos' ? 'active' : ''}`}
            onClick={() => setActiveTab('produtos')}
          >
            Produtos
          </button>
          <button 
            className={`tab-button ${activeTab === 'clientes' ? 'active' : ''}`}
            onClick={() => setActiveTab('clientes')}
          >
            Clientes
          </button>
          <button 
            className={`tab-button ${activeTab === 'faturamento' ? 'active' : ''}`}
            onClick={() => setActiveTab('faturamento')}
          >
            Faturamento
          </button>
        </div>
        
        <div className="dashboard-content">
          {activeTab === 'visaogeral' && (
            <div className="tab-visaogeral">
              <div className="dashboard-cards">
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Total de Vendas</h3>
                    <p className="card-value">{resumoVendas.totalVendas}</p>
                    <p className="card-trend positive">↑ {resumoVendas.taxaCrescimento} este mês</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Total de Pedidos</h3>
                    <p className="card-value">{resumoVendas.totalPedidos}</p>
                    <p className="card-trend positive">↑ 8.2% este mês</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Ticket Médio</h3>
                    <p className="card-value">{resumoVendas.mediaTicket}</p>
                    <p className="card-trend positive">↑ 3.5% este mês</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Artesãos Ativos</h3>
                    <p className="card-value">{artesaos.length}</p>
                    <p className="card-trend positive">↑ 2 novos este mês</p>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-row">
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Vendas Mensais</h3>
                    <GraficoVendas />
                  </div>
                </div>
                
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Vendas por Categoria</h3>
                    <GraficoPizza />
                  </div>
                </div>
              </div>
              
              <div className="dashboard-row">
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Pedidos Recentes</h3>
                    <table className="dashboard-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Cliente</th>
                          <th>Data</th>
                          <th>Valor</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pedidos.slice(0, 5).map(pedido => (
                          <tr key={pedido.id}>
                            <td>#{pedido.id}</td>
                            <td>{pedido.cliente}</td>
                            <td>{pedido.data}</td>
                            <td>{pedido.valor}</td>
                            <td>
                              <span className={`status-badge status-${pedido.status.toLowerCase().replace(' ', '-')}`}>
                                {pedido.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="panel-footer">
                      <button className="button secondary small">Ver Todos os Pedidos</button>
                    </div>
                  </div>
                </div>
                
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Produtos Mais Vendidos</h3>
                    <table className="dashboard-table">
                      <thead>
                        <tr>
                          <th>Produto</th>
                          <th>Categoria</th>
                          <th>Preço</th>
                          <th>Vendas</th>
                        </tr>
                      </thead>
                      <tbody>
                        {produtos.sort((a, b) => b.vendas - a.vendas).slice(0, 5).map(produto => (
                          <tr key={produto.id}>
                            <td>{produto.nome}</td>
                            <td>{produto.categoria}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.vendas}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="panel-footer">
                      <button className="button secondary small">Ver Todos os Produtos</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'artesaos' && (
            <div className="tab-artesaos">
              <div className="dashboard-header">
                <h2>Gerenciamento de Artesãos</h2>
                <div className="dashboard-actions">
                  <div className="search-container">
                    <input type="text" placeholder="Buscar artesão..." className="search-input" />
                    <button className="search-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                  <button className="button">Adicionar Artesão</button>
                </div>
              </div>
              
              <div className="dashboard-panel">
                <div className="panel-header">
                  <h3>Lista de Artesãos</h3>
                  <div className="panel-filters">
                    <select className="filter-select">
                      <option value="">Todas as Categorias</option>
                      <option value="texteis">Têxteis</option>
                      <option value="ceramica">Cerâmica</option>
                      <option value="joalheria">Joalheria</option>
                      <option value="madeira">Madeira</option>
                    </select>
                    <select className="filter-select">
                      <option value="vendas">Ordenar por Vendas</option>
                      <option value="produtos">Ordenar por Produtos</option>
                      <option value="avaliacao">Ordenar por Avaliação</option>
                    </select>
                  </div>
                </div>
                
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Categoria</th>
                      <th>Produtos</th>
                      <th>Vendas</th>
                      <th>Avaliação</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artesaos.map(artesao => (
                      <tr key={artesao.id}>
                        <td>#{artesao.id}</td>
                        <td>{artesao.nome}</td>
                        <td>{artesao.categoria}</td>
                        <td>{artesao.produtos}</td>
                        <td>{artesao.vendas}</td>
                        <td>
                          <div className="rating">
                            <span className="stars" style={{ width: `${(artesao.avaliacao / 5) * 100}%` }}></span>
                            <span className="rating-value">{artesao.avaliacao}</span>
                          </div>
                        </td>
                        <td>
                         <div className="artisan-actions" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="pagination">
                  <button className="pagination-button">Anterior</button>
                  <div className="pagination-pages">
                    <button className="pagination-page active">1</button>
                    <button className="pagination-page">2</button>
                    <button className="pagination-page">3</button>
                  </div>
                  <button className="pagination-button">Próximo</button>
                </div>
              </div>
              
              <div className="dashboard-row">
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Artesãos por Categoria</h3>
                    <GraficoPizza />
                  </div>
                </div>
                
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Desempenho de Vendas por Artesão</h3>
                    <GraficoVendas />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'pedidos' && (
            <div className="tab-pedidos">
              <div className="dashboard-header">
                <h2>Gerenciamento de Pedidos</h2>
                <div className="dashboard-actions">
                  <div className="search-container">
                    <input type="text" placeholder="Buscar pedido..." className="search-input" />
                    <button className="search-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                  <button className="button">Exportar Relatório</button>
                </div>
              </div>
              
              <div className="status-cards">
                <div className="status-card">
                  <h3>Processando</h3>
                  <p className="status-count">12</p>
                </div>
                <div className="status-card">
                  <h3>Em Trânsito</h3>
                  <p className="status-count">24</p>
                </div>
                <div className="status-card">
                  <h3>Entregue</h3>
                  <p className="status-count">156</p>
                </div>
                <div className="status-card">
                  <h3>Cancelado</h3>
                  <p className="status-count">8</p>
                </div>
              </div>
              
              <div className="dashboard-panel">
                <div className="panel-header">
                  <h3>Lista de Pedidos</h3>
                  <div className="panel-filters">
                    <select className="filter-select">
                      <option value="">Todos os Status</option>
                      <option value="processando">Processando</option>
                      <option value="em-transito">Em Trânsito</option>
                      <option value="entregue">Entregue</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                    <select className="filter-select">
                      <option value="recentes">Mais Recentes</option>
                      <option value="antigos">Mais Antigos</option>
                      <option value="valor-alto">Maior Valor</option>
                      <option value="valor-baixo">Menor Valor</option>
                    </select>
                  </div>
                </div>
                
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Cliente</th>
                      <th>Data</th>
                      <th>Valor</th>
                      <th>Itens</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pedidos.map(pedido => (
                      <tr key={pedido.id}>
                        <td>#{pedido.id}</td>
                        <td>{pedido.cliente}</td>
                        <td>{pedido.data}</td>
                        <td>{pedido.valor}</td>
                        <td>{pedido.itens}</td>
                        <td>
                          <span className={`status-badge status-${pedido.status.toLowerCase().replace(' ', '-')}`}>
                            {pedido.status}
                          </span>
                        </td>
                        <td>
                         <div className="artisan-actions" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="pagination">
                  <button className="pagination-button">Anterior</button>
                  <div className="pagination-pages">
                    <button className="pagination-page active">1</button>
                    <button className="pagination-page">2</button>
                    <button className="pagination-page">3</button>
                  </div>
                  <button className="pagination-button">Próximo</button>
                </div>
              </div>
              
              <div className="dashboard-row">
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Pedidos por Status</h3>
                    <GraficoPizza />
                  </div>
                </div>
                
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Tendência de Pedidos</h3>
                    <GraficoLinha />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'produtos' && (
            <div className="tab-produtos">
              <div className="dashboard-header">
                <h2>Gerenciamento de Produtos</h2>
                <div className="dashboard-actions">
                  <div className="search-container">
                    <input type="text" placeholder="Buscar produto..." className="search-input" />
                    <button className="search-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                  <button className="button">Adicionar Produto</button>
                </div>
              </div>
              
              <div className="dashboard-panel">
                <div className="panel-header">
                  <h3>Lista de Produtos</h3>
                  <div className="panel-filters">
                    <select className="filter-select">
                      <option value="">Todas as Categorias</option>
                      <option value="texteis">Têxteis</option>
                      <option value="ceramica">Cerâmica</option>
                      <option value="joalheria">Joalheria</option>
                      <option value="madeira">Madeira</option>
                    </select>
                    <select className="filter-select">
                      <option value="vendas">Ordenar por Vendas</option>
                      <option value="preco-alto">Maior Preço</option>
                      <option value="preco-baixo">Menor Preço</option>
                      <option value="estoque-baixo">Estoque Baixo</option>
                    </select>
                  </div>
                </div>
                
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Produto</th>
                      <th>Artesão</th>
                      <th>Categoria</th>
                      <th>Preço</th>
                      <th>Estoque</th>
                      <th>Vendas</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {produtos.map(produto => (
                      <tr key={produto.id}>
                        <td>#{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.artesao}</td>
                        <td>{produto.categoria}</td>
                        <td>{produto.preco}</td>
                        <td className={produto.estoque < 10 ? 'estoque-baixo' : ''}>
                          {produto.estoque}
                        </td>
                        <td>{produto.vendas}</td>
                        <td>
                         <div className="artisan-actions" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="pagination">
                  <button className="pagination-button">Anterior</button>
                  <div className="pagination-pages">
                    <button className="pagination-page active">1</button>
                    <button className="pagination-page">2</button>
                    <button className="pagination-page">3</button>
                  </div>
                  <button className="pagination-button">Próximo</button>
                </div>
              </div>
              
              <div className="dashboard-row">
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Produtos por Categoria</h3>
                    <GraficoPizza />
                  </div>
                </div>
                
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Produtos Mais Vendidos</h3>
                    <GraficoVendas />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'clientes' && (
            <div className="tab-clientes">
              <div className="dashboard-header">
                <h2>Gerenciamento de Clientes</h2>
                <div className="dashboard-actions">
                  <div className="search-container">
                    <input type="text" placeholder="Buscar cliente..." className="search-input" />
                    <button className="search-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </div>
                  <button className="button">Exportar Lista</button>
                </div>
              </div>
              
              <div className="dashboard-panel">
                <div className="panel-header">
                  <h3>Lista de Clientes</h3>
                  <div className="panel-filters">
                    <select className="filter-select">
                      <option value="recentes">Clientes Recentes</option>
                      <option value="antigos">Clientes Antigos</option>
                      <option value="mais-pedidos">Mais Pedidos</option>
                      <option value="maior-valor">Maior Valor</option>
                    </select>
                  </div>
                </div>
                
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Pedidos</th>
                      <th>Valor Total</th>
                      <th>Última Compra</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientes.map(cliente => (
                      <tr key={cliente.id}>
                        <td>#{cliente.id}</td>
                        <td>{cliente.nome}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.pedidos}</td>
                        <td>{cliente.valorTotal}</td>
                        <td>{cliente.ultimaCompra}</td>
                        <td>
                         <div className="artisan-actions" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start'
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
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="pagination">
                  <button className="pagination-button">Anterior</button>
                  <div className="pagination-pages">
                    <button className="pagination-page active">1</button>
                    <button className="pagination-page">2</button>
                    <button className="pagination-page">3</button>
                  </div>
                  <button className="pagination-button">Próximo</button>
                </div>
              </div>
              
              <div className="dashboard-row">
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Novos Clientes</h3>
                    <GraficoLinha />
                  </div>
                </div>
                
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Clientes por Valor de Compra</h3>
                    <GraficoVendas />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'faturamento' && (
            <div className="tab-faturamento">
              <div className="dashboard-header">
                <h2>Relatórios de Faturamento</h2>
                <div className="dashboard-actions">
                  <div className="date-filter">
                    <label>Período:</label>
                    <select className="filter-select">
                      <option value="mes-atual">Mês Atual</option>
                      <option value="mes-anterior">Mês Anterior</option>
                      <option value="trimestre">Último Trimestre</option>
                      <option value="ano">Ano Atual</option>
                      <option value="personalizado">Personalizado</option>
                    </select>
                  </div>
                  <button className="button">Exportar Relatório</button>
                </div>
              </div>
              
              <div className="dashboard-cards">
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Faturamento Total</h3>
                    <p className="card-value">R$ 125.430,00</p>
                    <p className="card-trend positive">↑ 12.5% vs. período anterior</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Lucro Líquido</h3>
                    <p className="card-value">R$ 43.900,50</p>
                    <p className="card-trend positive">↑ 8.7% vs. período anterior</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Comissão TISSAGE</h3>
                    <p className="card-value">R$ 18.814,50</p>
                    <p className="card-trend positive">↑ 12.5% vs. período anterior</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="card-content">
                    <h3>Pagamento a Artesãos</h3>
                    <p className="card-value">R$ 81.529,50</p>
                    <p className="card-trend positive">↑ 12.5% vs. período anterior</p>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-row">
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Faturamento Mensal</h3>
                    <GraficoVendas />
                  </div>
                </div>
                
                <div className="dashboard-col">
                  <div className="dashboard-panel">
                    <h3>Faturamento por Categoria</h3>
                    <GraficoPizza />
                  </div>
                </div>
              </div>
              
              <div className="dashboard-panel">
                <h3>Faturamento por Artesão (Top 5)</h3>
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Artesão</th>
                      <th>Categoria</th>
                      <th>Vendas</th>
                      <th>Faturamento</th>
                      <th>Comissão TISSAGE</th>
                      <th>Pagamento ao Artesão</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ana Silva</td>
                      <td>Joalheria</td>
                      <td>58</td>
                      <td>R$ 15.320,00</td>
                      <td>R$ 2.298,00</td>
                      <td>R$ 13.022,00</td>
                    </tr>
                    <tr>
                      <td>Maria Oliveira</td>
                      <td>Têxteis</td>
                      <td>42</td>
                      <td>R$ 12.450,00</td>
                      <td>R$ 1.867,50</td>
                      <td>R$ 10.582,50</td>
                    </tr>
                    <tr>
                      <td>Fernanda Lima</td>
                      <td>Têxteis</td>
                      <td>18</td>
                      <td>R$ 13.780,00</td>
                      <td>R$ 2.067,00</td>
                      <td>R$ 11.713,00</td>
                    </tr>
                    <tr>
                      <td>João Santos</td>
                      <td>Cerâmica</td>
                      <td>36</td>
                      <td>R$ 9.870,00</td>
                      <td>R$ 1.480,50</td>
                      <td>R$ 8.389,50</td>
                    </tr>
                    <tr>
                      <td>Juliana Costa</td>
                      <td>Joalheria</td>
                      <td>47</td>
                      <td>R$ 11.450,00</td>
                      <td>R$ 1.717,50</td>
                      <td>R$ 9.732,50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="dashboard-panel">
                <h3>Relatório de Impostos</h3>
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Tipo de Imposto</th>
                      <th>Base de Cálculo</th>
                      <th>Alíquota</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ICMS</td>
                      <td>R$ 125.430,00</td>
                      <td>18%</td>
                      <td>R$ 22.577,40</td>
                    </tr>
                    <tr>
                      <td>PIS</td>
                      <td>R$ 125.430,00</td>
                      <td>0,65%</td>
                      <td>R$ 815,30</td>
                    </tr>
                    <tr>
                      <td>COFINS</td>
                      <td>R$ 125.430,00</td>
                      <td>3%</td>
                      <td>R$ 3.762,90</td>
                    </tr>
                    <tr>
                      <td>ISS</td>
                      <td>R$ 18.814,50</td>
                      <td>5%</td>
                      <td>R$ 940,73</td>
                    </tr>
                    <tr>
                      <td>IRPJ</td>
                      <td>R$ 43.900,50</td>
                      <td>15%</td>
                      <td>R$ 6.585,08</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={3}><strong>Total de Impostos</strong></td>
                      <td><strong>R$ 34.681,41</strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
