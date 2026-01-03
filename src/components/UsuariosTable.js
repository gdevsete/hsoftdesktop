import React, { useState } from 'react';
import './TableContainer.css';
import Modal from './Modal';
import Toast from './Toast';

const UsuariosTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const usuarios = [
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: '12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cnpj: '11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    }
  ];

  const handleDeleteClick = (usuario) => {
    setSelectedUser(usuario);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setModalOpen(false);
    setToastVisible(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="table-container">
      <Modal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        clientName={selectedUser ? `${selectedUser.codigo} - ${selectedUser.razaoSocial} - ${selectedUser.cnpj}` : ''}
      />
      
      <Toast 
        message="Usuário desativado com sucesso!"
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
      
      <div className="table-header">
        <div className="table-header-cell flex-1">
          <span>Razão Social / Código</span>
        </div>
        <div className="table-divider" />
        <div className="table-header-cell flex-1">
          <span>Nome Fantasia / CPF ou CNPJ</span>
        </div>
        <div className="table-divider" />
        <div className="table-header-cell fixed-280">
          <span>Cidade / Estado</span>
        </div>
        <div className="table-divider" />
        <div className="table-header-cell fixed-280">
          <span>Telefone / E-mail</span>
        </div>
      </div>
      
      <div className="table-rows">
        {usuarios.map((usuario, index) => (
          <div key={index} className="table-row">
            <div className="table-cell flex-1">
              <p className="cell-primary">{usuario.razaoSocial}</p>
              <p className="cell-secondary">CÓD: {usuario.codigo}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell flex-1">
              <p className="cell-primary">{usuario.nomeFantasia}</p>
              <p className="cell-secondary">CNPJ: {usuario.cnpj}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell fixed-280">
              <p className="cell-primary">{usuario.cidade}</p>
              <p className="cell-secondary">{usuario.estado}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell fixed-280">
              <p className="cell-primary">{usuario.telefone}</p>
              <p className="cell-secondary">{usuario.email}</p>
            </div>
            
            <div className="hover-actions">
              <button className="action-icon edit-icon" title="Editar">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M14.166 2.5C14.3849 2.28113 14.6447 2.10752 14.9307 1.98906C15.2167 1.87061 15.5232 1.80969 15.8327 1.80969C16.1422 1.80969 16.4487 1.87061 16.7347 1.98906C17.0206 2.10752 17.2805 2.28113 17.4993 2.5C17.7182 2.71887 17.8918 2.97871 18.0103 3.26468C18.1287 3.55064 18.1896 3.85714 18.1896 4.16667C18.1896 4.47619 18.1287 4.78269 18.0103 5.06866C17.8918 5.35462 17.7182 5.61446 17.4993 5.83333L6.24935 17.0833L1.66602 18.3333L2.91602 13.75L14.166 2.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="action-icon delete-icon" onClick={() => handleDeleteClick(usuario)} title="Excluir">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 5H4.16667H17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66602 5.00033V3.33366C6.66602 2.89163 6.84161 2.46771 7.15417 2.15515C7.46673 1.84259 7.89065 1.66699 8.33268 1.66699H11.666C12.108 1.66699 12.532 1.84259 12.8445 2.15515C13.1571 2.46771 13.3327 2.89163 13.3327 3.33366V5.00033M15.8327 5.00033V16.667C15.8327 17.109 15.6571 17.5329 15.3445 17.8455C15.032 18.1581 14.608 18.3337 14.166 18.3337H5.83268C5.39065 18.3337 4.96673 18.1581 4.65417 17.8455C4.34161 17.5329 4.16602 17.109 4.16602 16.667V5.00033H15.8327Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33398 9.16699V14.167" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.666 9.16699V14.167" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsuariosTable;
