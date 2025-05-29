import React, { useEffect, useState } from 'react';
import './UserProfile.css';

interface UserProfileProps {}

const UserProfile: React.FC<UserProfileProps> = () => {
  const [activeTab, setActiveTab] = useState<string>('informacoes');
  
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['informacoes', 'pedidos', 'favoritos', 'configuracoes'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  // Dados mockados do usuário
  const user = {
    nome: 'Ana Silva',
    email: 'ana.silva@email.com',
    telefone: '(11) 98765-4321',
    endereco: 'Rua das Flores, 123',
    bairro: 'Jardim Paulista',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01234-567'
  };
  
  // Dados mockados de pedidos
  const pedidos = [
    {
      id: '12345',
      data: '15/05/2025',
      valor: 'R$ 245,00',
      status: 'Entregue',
      itens: [
        { nome: 'Cesto Artesanal', quantidade: 1, preco: 'R$ 120,00' },
        { nome: 'Vaso de Cerâmica', quantidade: 1, preco: 'R$ 125,00' }
      ]
    },
    {
      id: '12346',
      data: '22/05/2025',
      valor: 'R$ 180,00',
      status: 'Em trânsito',
      itens: [
        { nome: 'Tapete Feito à Mão', quantidade: 1, preco: 'R$ 180,00' }
      ]
    },
    {
      id: '12347',
      data: '24/05/2025',
      valor: 'R$ 95,00',
      status: 'Processando',
      itens: [
        { nome: 'Colar Artesanal', quantidade: 1, preco: 'R$ 65,00' },
        { nome: 'Pulseira Trançada', quantidade: 1, preco: 'R$ 30,00' }
      ]
    }
  ];
  
  // Dados mockados de artesãos favoritos
  const artesaosFavoritos = [
    {
      id: 1,
      nome: 'Maria Oliveira',
      especialidade: 'Tecelagem',
      imagem: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      nome: 'João Santos',
      especialidade: 'Cerâmica',
      imagem: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      nome: 'Carla Mendes',
      especialidade: 'Joalheria Artesanal',
      imagem: 'https://via.placeholder.com/100'
    }
  ];
  
  // Dados mockados de produtos favoritos
  const produtosFavoritos = [
    {
      id: 1,
      nome: 'Cesto Artesanal',
      artesao: 'Maria Oliveira',
      preco: 'R$ 120,00',
      imagem: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      nome: 'Vaso de Cerâmica',
      artesao: 'João Santos',
      preco: 'R$ 125,00',
      imagem: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      nome: 'Colar Artesanal',
      artesao: 'Carla Mendes',
      preco: 'R$ 65,00',
      imagem: 'https://via.placeholder.com/100'
    }
  ];
  
  return (
    <div className="perfil-user-page">
      <div className="container">
        <h1 className="perfil-titulo">Meu Perfil</h1>
        
        <div className="perfil-header">
          <div className="perfil-avatar">
            <div className="avatar-placeholder">
              {user.nome.charAt(0)}
            </div>
          </div>
          <div className="perfil-info-basica">
            <h2>{user.nome}</h2>
            <p>{user.email}</p>
            <p>Membro desde Maio 2025</p>
          </div>
        </div>
        
        <div className="perfil-tabs">
          <button 
            className={`tab-button ${activeTab === 'informacoes' ? 'active' : ''}`}
            onClick={() => setActiveTab('informacoes')}
          >
            Informações Pessoais
          </button>
          <button 
            className={`tab-button ${activeTab === 'pedidos' ? 'active' : ''}`}
            onClick={() => setActiveTab('pedidos')}
          >
            Meus Pedidos
          </button>
          <button 
            className={`tab-button ${activeTab === 'favoritos' ? 'active' : ''}`}
            onClick={() => setActiveTab('favoritos')}
          >
            Favoritos
          </button>
          <button 
            className={`tab-button ${activeTab === 'configuracoes' ? 'active' : ''}`}
            onClick={() => setActiveTab('configuracoes')}
          >
            Configurações
          </button>
        </div>
        
        <div className="perfil-content">
          {activeTab === 'informacoes' && (
            <div className="tab-informacoes">
              <div className="card-perfil">
                <h3>Informações Pessoais</h3>
                
                <form className="form-perfil">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="nome">Nome Completo</label>
                      <input type="text" id="nome" defaultValue={user.nome} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">E-mail</label>
                      <input type="email" id="email" defaultValue={user.email} />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="telefone">Telefone</label>
                      <input type="tel" id="telefone" defaultValue={user.telefone} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="data-nascimento">Data de Nascimento</label>
                      <input type="date" id="data-nascimento" />
                    </div>
                  </div>
                  
                  <h3>Endereço</h3>
                  
                  <div className="form-group">
                    <label htmlFor="endereco">Endereço</label>
                    <input type="text" id="endereco" defaultValue={user.endereco} />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="bairro">Bairro</label>
                      <input type="text" id="bairro" defaultValue={user.bairro} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cidade">Cidade</label>
                      <input type="text" id="cidade" defaultValue={user.cidade} />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="estado">Estado</label>
                      <select id="estado" defaultValue={user.estado}>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="cep">CEP</label>
                      <input type="text" id="cep" defaultValue={user.cep} />
                    </div>
                  </div>
                  
                  <button type="button" className="button">Salvar Alterações</button>
                </form>
              </div>
            </div>
          )}
          
          {activeTab === 'pedidos' && (
            <div className="tab-pedidos">
              <div className="card-perfil">
                <h3>Meus Pedidos</h3>
                
                {pedidos.map((pedido) => (
                  <div key={pedido.id} className="pedido-card">
                    <div className="pedido-header">
                      <div className="pedido-info">
                        <div>
                          <span className="pedido-label">Pedido:</span>
                          <span className="pedido-id">#{pedido.id}</span>
                        </div>
                        <div>
                          <span className="pedido-label">Data:</span>
                          <span>{pedido.data}</span>
                        </div>
                        <div>
                          <span className="pedido-label">Total:</span>
                          <span>{pedido.valor}</span>
                        </div>
                      </div>
                      <div className={`pedido-status status-${pedido.status.toLowerCase().replace(' ', '-')}`}>
                        {pedido.status}
                      </div>
                    </div>
                    
                    <div className="pedido-itens">
                      <h4>Itens do Pedido</h4>
                      <table className="itens-table">
                        <thead>
                          <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pedido.itens.map((item, index) => (
                            <tr key={index}>
                              <td>{item.nome}</td>
                              <td>{item.quantidade}</td>
                              <td>{item.preco}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="pedido-acoes">
                      <button className="button secondary">Ver Detalhes</button>
                      {pedido.status === 'Entregue' && (
                        <button className="button">Avaliar Produtos</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'favoritos' && (
            <div className="tab-favoritos">
              <div className="card-perfil">
                <h3>Artesãos Favoritos</h3>
                
                <div className="favoritos-grid">
                  {artesaosFavoritos.map((artesao) => (
                    <div key={artesao.id} className="favorito-card">
                      <div className="favorito-imagem">
                        <img src={artesao.imagem} alt={artesao.nome} />
                      </div>
                      <div className="favorito-info">
                        <h4>{artesao.nome}</h4>
                        <p>{artesao.especialidade}</p>
                        <button className="button small">Ver Perfil</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="card-perfil">
                <h3>Produtos Favoritos</h3>
                
                <div className="favoritos-grid">
                  {produtosFavoritos.map((produto) => (
                    <div key={produto.id} className="favorito-card">
                      <div className="favorito-imagem">
                        <img src={produto.imagem} alt={produto.nome} />
                      </div>
                      <div className="favorito-info">
                        <h4>{produto.nome}</h4>
                        <p>Por {produto.artesao}</p>
                        <p className="preco">{produto.preco}</p>
                        <div className="favorito-acoes">
                          <button className="button small">Ver Produto</button>
                          <button className="button secondary small">Adicionar ao Carrinho</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'configuracoes' && (
            <div className="tab-configuracoes">
              <div className="card-perfil">
                <h3>Alterar Senha</h3>
                
                <form className="form-perfil">
                  <div className="form-group">
                    <label htmlFor="senha-atual">Senha Atual</label>
                    <input type="password" id="senha-atual" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="nova-senha">Nova Senha</label>
                    <input type="password" id="nova-senha" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="confirmar-senha">Confirmar Nova Senha</label>
                    <input type="password" id="confirmar-senha" />
                  </div>
                  
                  <button type="button" className="button">Atualizar Senha</button>
                </form>
              </div>
              
              <div className="card-perfil">
                <h3>Preferências de Notificação</h3>
                
                <div className="preferencias-lista">
                  <div className="preferencia-item">
                    <div>
                      <h4>Atualizações de Pedidos</h4>
                      <p>Receba notificações sobre o status dos seus pedidos</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  
                  <div className="preferencia-item">
                    <div>
                      <h4>Novos Produtos</h4>
                      <p>Seja notificado quando novos produtos forem adicionados</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  
                  <div className="preferencia-item">
                    <div>
                      <h4>Promoções e Descontos</h4>
                      <p>Receba informações sobre promoções especiais</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                  
                  <div className="preferencia-item">
                    <div>
                      <h4>Newsletter</h4>
                      <p>Receba nossa newsletter mensal</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
                
                <button type="button" className="button">Salvar Preferências</button>
              </div>
              
              <div className="card-perfil danger-zone">
                <h3>Zona de Perigo</h3>
                
                <p>Ações que não podem ser desfeitas:</p>
                
                <div style={{ marginTop: '10px' }}>
                  <button type="button" className="button danger">Excluir Minha Conta</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
