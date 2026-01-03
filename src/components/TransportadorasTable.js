import React from 'react';
import './TableContainer.css';

const TransportadorasTable = () => {
  const linhas = Array.from({ length: 9 }).map((_, index) => ({
    id: index,
    razaoSocial: 'HUGO VICTOR GOULART DE OLIVEIRA',
    codigo: '12345678',
    nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
    cnpj: '11.882.936/0001-00',
    cidade: 'PARAISO DO TOCANTINS',
    estado: 'TOCANTINS',
    telefone: '(63) 98418-0109 | (63) 3214-8140',
    email: 'webpalmasdistribuidora@gmail.com'
  }));

  return (
    <div className="table-container">
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
        {linhas.map((linha) => (
          <div key={linha.id} className="table-row">
            <div className="table-cell flex-1">
              <p className="cell-primary">{linha.razaoSocial}</p>
              <p className="cell-secondary">CÓD: {linha.codigo}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell flex-1">
              <p className="cell-primary">{linha.nomeFantasia}</p>
              <p className="cell-secondary">CNPJ: {linha.cnpj}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell fixed-280">
              <p className="cell-primary">{linha.cidade}</p>
              <p className="cell-secondary">{linha.estado}</p>
            </div>
            <div className="table-cell-divider" />
            <div className="table-cell fixed-280">
              <p className="cell-primary">{linha.telefone}</p>
              <p className="cell-secondary">{linha.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportadorasTable;
