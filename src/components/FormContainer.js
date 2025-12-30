import React from 'react';
import './FormContainer.css';

const FormContainer = () => {
  return (
    <div className="form-container">
      <div className="form-row">
        <div className="input-group flex-1">
          <label>Cliente</label>
          <div className="select-field">
            <span>10327 - TEC MAIS INFORMATICA E PAPELARIA - 54.658.230/0001-64</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '489px'}}>
          <label>Estado / Cidade</label>
          <div className="select-field">
            <span>Vila Bela da Santíssima Trindade - TO</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '409px'}}>
          <label>Situação</label>
          <div className="select-field">
            <span>ATIVO</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="form-row">
        <div className="input-group flex-1">
          <label>Empresa</label>
          <div className="select-field">
            <span>3 - jalapao tecnologia e sistemas ltda - 89.564.159/0001-30</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '490px'}}>
          <label>E-mail</label>
          <div className="input-field">
            <span>compras@supritec.com.br</span>
          </div>
        </div>
        
        <div className="input-group" style={{width: '407px'}}>
          <label>Celular</label>
          <div className="input-field">
            <span>(63) 98123 - 4455</span>
          </div>
        </div>
      </div>
      
      <div className="form-row" style={{width: '1795px'}}>
        <div className="input-group flex-1">
          <label>Vendedor</label>
          <div className="select-field">
            <span>46 - saulo carvalho neto - 598.366.428-44</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '289.5px'}}>
          <label>Grupo</label>
          <div className="select-field">
            <span>varejo</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '189.5px'}}>
          <label>Rota</label>
          <div className="select-field">
            <span>nordeste</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '298px'}}>
          <label>Tipo</label>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="tipo" value="fisica" />
              <span>Física</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="tipo" value="juridica" />
              <span>Jurídica</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="tipo" value="todos" defaultChecked />
              <span>Todos</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
