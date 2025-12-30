import React, { useState } from 'react';
import './TableContainer.css';
import Modal from './Modal';
import Toast from './Toast';

const TableContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const clientes = [
    {
      razaoSocial: 'Aço e Construção Material de Primeira S.A.',
      codigo: '1502',
      nomeFantasia: 'Aço e Construção Ltda',
      cnpj: '12.345.678/0001-90',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      telefone: '(11) 3456-7890 | (11) 98520-0874',
      email: 'contato@acoeonstrucao.com.br'
    },
    {
      razaoSocial: 'Café Premium Brasil Importação e Exportação Ltda',
      codigo: '805',
      nomeFantasia: 'Café Premium Brasil',
      cnpj: '23.456.789/0001-01',
      cidade: 'belo horizonte',
      estado: 'minas gerais',
      telefone: '(31) 2234 - 5678 | (31) 99876-5432',
      email: 'vendas@cafepremium.com.br'
    },
    {
      razaoSocial: 'Consultoria Digital Plus Tecnologia e Serviços S.A.',
      codigo: '10568',
      nomeFantasia: 'Consultoria Digital Plus',
      cnpj: '34.567.890/0001-12',
      cidade: 'Rio de Janeiro',
      estado: 'Rio de Janeiro',
      telefone: '(21) 3456 - 7890 | (21) 98765-6543',
      email: 'info@consultoriadigital.com.br'
    },
    {
      razaoSocial: 'carlos moura silva',
      codigo: '659',
      nomeFantasia: '',
      cnpj: '795.500.123-78',
      cidade: 'Campinas',
      estado: 'São Paulo',
      telefone: '(19) 3567 - 8901 | (19) 99876-7654',
      email: 'carlos.m@hotmail.com'
    },
    {
      razaoSocial: 'Fitness Premium Club Academia e Wellness Ltda',
      codigo: '2077',
      nomeFantasia: 'Fitness Premium Club',
      cnpj: '56.789.012/0001-34',
      cidade: 'Belo Horizonte',
      estado: 'minas gerais',
      telefone: '(31) 3678 - 9012 | (31) 98765-8765',
      email: 'academia@fitnesspremium.com.br'
    },
    {
      razaoSocial: 'joao ricardo souto',
      codigo: '365',
      nomeFantasia: '',
      cnpj: '335.854.620-00',
      cidade: 'Curitiba',
      estado: 'paraná',
      telefone: '(41) 3789 - 0123 | (41) 99876-9876',
      email: 'jricardosouto@gmail.com'
    },
    {
      razaoSocial: 'logistica integradaLogística Integrada Brasil Transportes e Distribuição S.A.',
      codigo: '4690',
      nomeFantasia: 'logistica integrada',
      cnpj: '11.882.936/0001-00',
      cidade: 'Santos',
      estado: 'são paulo',
      telefone: '(13) 3890 - 1234 | (13) 98765-0987',
      email: 'logistica@integradalogistica.com.br'
    },
    {
      razaoSocial: 'Pharma Solutions Indústria Farmacêutica Ltda',
      codigo: '6670',
      nomeFantasia: 'Pharma Solutions',
      cnpj: '89.012.345/0001-67',
      cidade: 'São Bernardo do Campo',
      estado: 'são paulo',
      telefone: '(11) 3901 - 2345 | (11) 99876-1098',
      email: 'compras@pharmasolutions.com.br'
    },
    {
      razaoSocial: 'Restaurante Sabor Caseiro Alimentação Ltda',
      codigo: '901',
      nomeFantasia: 'Restaurante Sabor Caseiro',
      cnpj: '90.123.456/0001-78',
      cidade: 'Salvador',
      estado: 'Bahia',
      telefone: '(71) 3012 - 3456 | (71) 99876-2109',
      email: 'reservas@saborcaseiro.com.br'
    }
  ];

  const handleDeleteClick = (cliente) => {
    setSelectedClient(cliente);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setModalOpen(false);
    setToastVisible(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <div className="table-container">
      <Modal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        clientName={selectedClient ? `${selectedClient.codigo} - ${selectedClient.razaoSocial} - ${selectedClient.cnpj}` : ''}
      />
      
      <Toast 
        message="Cliente desativado com sucesso!"
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
        {clientes.map((cliente, index) => (
          <div key={index} className="table-row">
            <div className="table-cell flex-1">
              <p className="cell-primary">{cliente.razaoSocial}</p>
              <p className="cell-secondary">CÓD: {cliente.codigo}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell flex-1">
              <p className="cell-primary">{cliente.nomeFantasia}</p>
              <p className="cell-secondary">{cliente.cnpj.includes('.') ? 'CNPJ' : 'CPF'}: {cliente.cnpj}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell fixed-280">
              <p className="cell-primary">{cliente.cidade}</p>
              <p className="cell-secondary">{cliente.estado}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell fixed-280">
              <p className="cell-primary">{cliente.telefone}</p>
              <p className="cell-secondary">{cliente.email}</p>
            </div>
            
            <div className="hover-actions">
              <button className="action-icon-btn" title="Visualizar">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 4.58334C6.41667 4.58334 2.54167 7.28751 0.916672 11C2.54167 14.7125 6.41667 17.4167 11 17.4167C15.5833 17.4167 19.4583 14.7125 21.0833 11C19.4583 7.28751 15.5833 4.58334 11 4.58334ZM11 15.125C8.56667 15.125 6.58334 13.1417 6.58334 10.7083C6.58334 8.27501 8.56667 6.29167 11 6.29167C13.4333 6.29167 15.4167 8.27501 15.4167 10.7083C15.4167 13.1417 13.4333 15.125 11 15.125ZM11 8.25001C9.66667 8.25001 8.54167 9.37501 8.54167 10.7083C8.54167 12.0417 9.66667 13.1667 11 13.1667C12.3333 13.1667 13.4583 12.0417 13.4583 10.7083C13.4583 9.37501 12.3333 8.25001 11 8.25001Z" fill="#008236"/>
                </svg>
              </button>
              
              <button className="action-icon-btn" title="Editar">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3.27084 15.4292V18.7292H6.57084L16.2708 9.02917L12.9708 5.72917L3.27084 15.4292ZM18.7708 6.52917C19.1208 6.17917 19.1208 5.61667 18.7708 5.26667L16.7333 3.22917C16.3833 2.87917 15.8208 2.87917 15.4708 3.22917L13.8458 4.85417L17.1458 8.15417L18.7708 6.52917Z" fill="#008236"/>
                </svg>
              </button>
              
              <button className="action-icon-btn" title="Excluir" onClick={() => handleDeleteClick(cliente)}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5.5 17.4167C5.5 18.5417 6.41667 19.4583 7.54167 19.4583H14.4583C15.5833 19.4583 16.5 18.5417 16.5 17.4167V7.33334H5.5V17.4167ZM7.54167 9.37501H14.4583V17.4167H7.54167V9.37501ZM14.0417 4.27084L13.0208 3.25001H8.97917L7.95834 4.27084H4.58334V6.31251H17.4167V4.27084H14.0417Z" fill="#008236"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableContainer;
