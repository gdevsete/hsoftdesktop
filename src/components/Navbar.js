import React from 'react';
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
            <button className="menu-btn menu-btn-cadastros active">
              <img src={addressBookTabs} alt="" className="menu-icon" />
              <span>Cadastros</span>
            </button>
            
            <button className="menu-btn menu-btn-comercial">
              <img src={comercial} alt="" className="menu-icon" />
              <span>Comercial</span>
            </button>
            
            <button className="menu-btn menu-btn-financeiro">
              <img src={financeiro} alt="" className="menu-icon" />
              <span>Financeiro</span>
            </button>
            
            <button className="menu-btn menu-btn-fiscal">
              <img src={bank} alt="" className="menu-icon" />
              <span>Fiscal</span>
            </button>
            
            <button className="menu-btn menu-btn-relatorios">
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
    </div>
  );
};

export default Navbar;
