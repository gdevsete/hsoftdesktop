import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onConfirm, clientName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Desativar Cadastro</h2>
          <button className="modal-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#008236" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <p>Deseja desativar o cadastro abaixo?</p>
          <p>&nbsp;</p>
          <p>{clientName}</p>
        </div>
        
        <div className="modal-footer">
          <button className="modal-btn modal-btn-secondary" onClick={onClose}>
            Fechar
          </button>
          <button className="modal-btn modal-btn-primary" onClick={onConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
