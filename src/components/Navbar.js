import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../icons/logo.svg';
import addressBookTabs from '../icons/address-book-tabs.svg';
import comercial from '../icons/comercial.svg';
import financeiro from '../icons/financeiro.svg';
import bank from '../icons/bank.svg';
import chartBar from '../icons/chart-bar.svg';
import bell from '../icons/menu-btn-side-bell.svg';
import question from '../icons/menu-btn-side-question.svg';
import gearSix from '../icons/menu-btn-side-gear-six.svg';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="navbar-megamenu">
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo-container">
            <img 
              src={logo} 
              alt="H-SOFT Logo" 
              className="logo"
            />
          </div>
          
          <div className="menu-buttons">
            <button 
              className={`menu-btn menu-btn-cadastros ${activeMenu === 'cadastros' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('cadastros')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <img src={addressBookTabs} alt="" className="menu-icon" />
              <span>Cadastros</span>
            </button>
            
            <button className="menu-btn menu-btn-comercial">
              <img src={comercial} alt="" className="menu-icon" />
              <span>Comercial</span>
            </button>
            
            <button 
              className={`menu-btn menu-btn-financeiro ${activeMenu === 'financeiro' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('financeiro')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <img src={financeiro} alt="" className="menu-icon" />
              <span>Financeiro</span>
            </button>
            
            <button 
              className={`menu-btn menu-btn-fiscal ${activeMenu === 'fiscal' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('fiscal')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <img src={bank} alt="" className="menu-icon" />
              <span>Fiscal</span>
            </button>
            
            <button 
              className={`menu-btn menu-btn-relatorios ${activeMenu === 'relatorios' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('relatorios')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <img src={chartBar} alt="" className="menu-icon" />
              <span>Relatórios</span>
            </button>
          </div>
        </div>
        
        <div className="navbar-right">
          <div className="search-container">
            <button className="search-btn">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M9.16667 15.5833C12.6644 15.5833 15.5 12.7477 15.5 9.25C15.5 5.75228 12.6644 2.91667 9.16667 2.91667C5.66895 2.91667 2.83334 5.75228 2.83334 9.25C2.83334 12.7477 5.66895 15.5833 9.16667 15.5833Z" stroke="#444455" strokeWidth="2"/>
                <path d="M13.75 13.75L19.1667 19.1667" stroke="#444455" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <div className="icon-buttons">
            <button className="icon-btn bell-btn">
              <img src={bell} alt="Notificações" width="24" height="24" />
            </button>
            
            <button className="icon-btn help-btn">
              <img src={question} alt="Ajuda" width="24" height="24" />
            </button>
            
            <button className="icon-btn settings-btn">
              <img src={gearSix} alt="Configurações" width="24" height="24" />
            </button>
            
            <div className="user-avatar">
              <img 
                src="https://www.figma.com/api/mcp/asset/6b43b094-d8fa-43fb-ac9c-6545cb402b88" 
                alt="User Avatar" 
                width="35" 
                height="35"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Megamenu para Cadastros */}
      {activeMenu === 'cadastros' && (
        <div 
          className="megamenu-cadastros"
          onMouseEnter={() => setActiveMenu('cadastros')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="megamenu-section">
            <div className="megamenu-section-title">Cadastros</div>
            <div className="megamenu-items">
              <Link to="/clientes" className="megamenu-item">Cliente</Link>
              <Link to="/usuarios" className="megamenu-item">Usuário</Link>
              <Link to="/empresas" className="megamenu-item">Empresa</Link>
              <Link to="/fornecedores" className="megamenu-item">Fornecedor</Link>
                <Link to="/transportadoras" className="megamenu-item">Transportadora</Link>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Produtos</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Produtos</div>
              <div className="megamenu-item">Acerto de Estoque</div>
              <div className="megamenu-item">Entrada e Saída Manual</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Sub-section Title</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Sub-section Title</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Sub-section Title</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>
        </div>
      )}

      {/* Megamenu para Financeiro */}
      {activeMenu === 'financeiro' && (
        <div 
          className="megamenu-financeiro"
          onMouseEnter={() => setActiveMenu('financeiro')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="megamenu-section">
            <div className="megamenu-section-title">Contas a Receber</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Contas a Receber</div>
              <div className="megamenu-item">Crédito Cliente</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Contas a Pagar</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Contas a Pagar</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Boletos</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Remessa de Boletos</div>
              <div className="megamenu-item">Retorno de Boletos</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Banco</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Cadastro Bancário</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Sub-section Title</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>
        </div>
      )}

      {/* Megamenu para Fiscal */}
      {activeMenu === 'fiscal' && (
        <div 
          className="megamenu-fiscal"
          onMouseEnter={() => setActiveMenu('fiscal')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="megamenu-section">
            <div className="megamenu-section-title">Notas</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Documentos Fiscais</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Entrada</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Entrada de Nota</div>
              <div className="megamenu-item">Formação de Preço</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Ajuste</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Naturezas de Operação</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Banco</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Sub-section Title</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>
        </div>
      )}

      {/* Megamenu para Relatórios */}
      {activeMenu === 'relatorios' && (
        <div 
          className="megamenu-relatorios"
          onMouseEnter={() => setActiveMenu('relatorios')}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="megamenu-section">
            <div className="megamenu-section-title">Análise de Produtos</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section-item</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Entrada</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Boletos</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Banco</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>

          <div className="megamenu-section">
            <div className="megamenu-section-title">Sub-section Title</div>
            <div className="megamenu-items">
              <div className="megamenu-item">Sub-section Item</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
