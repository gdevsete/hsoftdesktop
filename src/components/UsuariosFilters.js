import React from 'react';
import './FormContainer.css';

const UsuariosFilters = () => {
  return (
    <div className="form-container">
      <div className="form-row">
        <div className="input-group primary-field-width">
          <label>Usuário</label>
          <div className="select-field">
            <span>8 - JOAO GUIMARAES - 507.528.990-10</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '390px'}}>
          <label>Estado / Cidade</label>
          <div className="select-field">
            <span>PALMAS - TO</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="input-group" style={{width: '297px'}}>
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
        <div className="input-group primary-field-width">
          <label>Empresa</label>
          <div className="select-field">
            <span>1 - PALMAS TEC DISTRIBUIDORA LTDA - ME - 31.552.007/0001-90</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div className="input-group" style={{width: '390px'}}>
          <label>Email</label>
          <div className="input-field">
            <span>joao.guimaraes@palmastec.com.br</span>
          </div>
        </div>

        <div className="input-group" style={{width: '297px'}}>
          <label>Celular</label>
          <div className="input-field">
            <span>(63) 99920-6341</span>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="input-group" style={{width: '553px'}}>
          <label>Equipe</label>
          <div className="select-field">
            <span>1 - VENDAS</span>
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

export default UsuariosFilters;
