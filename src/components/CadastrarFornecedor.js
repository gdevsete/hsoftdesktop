import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import './CadastrarFornecedor.css';

function CadastrarFornecedor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fornecedor: '208 - FUJIMAIS PAPEIS FOTOGRAFICOS - 18.552.960/0001-33',
    estadoCidade: 'VILA BELA DA SANTÍSSIMA TRINDADE - TO',
    situacao: 'ATIVO',
    empresa: '4 - TECNORTE ASSISTENCIA TECNICA AUTORIZADA EIRELI - 11.855.200/0001-30',
    email: 'tecnorte.sac@gmail.com',
    celular: '(63) 92452-0808',
    comprador: '15 - ZILDA BORGES LIRA - 167.499.200-65',
    grupo: 'ATACADO - SP',
    tipo: 'Fisica'
  });

  const [fornecedores, setFornecedores] = useState([
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    },
    {
      razaoSocial: 'Hugo Victor Goulart de Oliveira',
      codigo: 'CÓD: 12345678',
      nomeFantasia: 'WEB PALMAS PAPELARIA E INFORMATICA',
      cpfCnpj: 'CNPJ: 11.882.936/0001-00',
      cidade: 'Paraíso do Tocantins',
      estado: 'Tocantins',
      telefone: '(63) 98418-0109 | (63) 3214-8140',
      email: 'webpalmasdistribuidora@gmail.com'
    }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário de fornecedor:', formData);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleIncluir = () => {
    navigate('/cadastrar-fornecedor');
  };

  const customButtons = (
    <>
      <button className="action-btn include-btn" onClick={handleIncluir}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="#008236" strokeWidth="1.5"/>
          <path d="M10 6.5V13.5M6.5 10H13.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>Incluir</span>
      </button>
      <button className="action-btn print-btn" onClick={handlePrint}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M5 6.5V2.5H15V6.5M5 14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V12C18 12.5304 17.7893 13.0391 17.4142 13.4142C17.0391 13.7893 16.5304 14 16 14H15M5 11H15V17.5H5V11Z" stroke="#008236" strokeWidth="1.5"/>
        </svg>
        <span>Imprimir</span>
      </button>
    </>
  );

  return (
    <div className="cadastrar-fornecedor-container">
      <Navbar />
      <PageTitle title="FORNECEDORES" buttons={customButtons} />

      <div className="form-container">
        {/* Formulário principal */}
        <form onSubmit={handleSubmit} className="fornecedor-form">
          {/* Primeira linha: Fornecedor, Estado/Cidade, Situação */}
          <div className="form-row">
            <div className="form-group fornecedor-field">
              <label className="form-label">Fornecedor</label>
              <select 
                name="fornecedor" 
                value={formData.fornecedor}
                onChange={handleChange}
                className="form-input select-dropdown"
              >
                <option>208 - FUJIMAIS PAPEIS FOTOGRAFICOS - 18.552.960/0001-33</option>
              </select>
            </div>
            
            <div className="form-group estado-cidade-field">
              <label className="form-label">Estado / Cidade</label>
              <select 
                name="estadoCidade" 
                value={formData.estadoCidade}
                onChange={handleChange}
                className="form-input select-dropdown"
              >
                <option>VILA BELA DA SANTÍSSIMA TRINDADE - TO</option>
              </select>
            </div>
            
            <div className="form-group situacao-field">
              <label className="form-label">Situação</label>
              <select 
                name="situacao" 
                value={formData.situacao}
                onChange={handleChange}
                className="form-input select-dropdown"
              >
                <option>ATIVO</option>
                <option>INATIVO</option>
              </select>
            </div>
          </div>

          {/* Segunda linha: Empresa, Email, Celular */}
          <div className="form-row">
            <div className="form-group empresa-field">
              <label className="form-label">Empresa</label>
              <select 
                name="empresa" 
                value={formData.empresa}
                onChange={handleChange}
                className="form-input select-dropdown"
              >
                <option>4 - TECNORTE ASSISTENCIA TECNICA AUTORIZADA EIRELI - 11.855.200/0001-30</option>
              </select>
            </div>
            
            <div className="form-group email-field">
              <label className="form-label">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            
            <div className="form-group celular-field">
              <label className="form-label">Celular</label>
              <input 
                type="tel" 
                name="celular" 
                value={formData.celular}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Terceira linha: Comprador, Grupo, Tipo */}
          <div className="form-row">
            <div className="form-group comprador-field">
              <label className="form-label">Comprador</label>
              <select 
                name="comprador" 
                value={formData.comprador}
                onChange={handleChange}
                className="form-input select-dropdown"
              >
                <option>15 - ZILDA BORGES LIRA - 167.499.200-65</option>
              </select>
            </div>
            
            <div className="form-group grupo-field">
              <label className="form-label">Grupo</label>
              <select 
                name="grupo" 
                value={formData.grupo}
                onChange={handleChange}
                className="form-input select-dropdown"
              >
                <option>ATACADO - SP</option>
              </select>
            </div>
            
            <div className="form-group tipo-field">
              <label className="form-label">Tipo</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input 
                    type="radio" 
                    id="tipo-fisica" 
                    name="tipo" 
                    value="Fisica"
                    checked={formData.tipo === 'Fisica'}
                    onChange={handleChange}
                  />
                  <label htmlFor="tipo-fisica">Física</label>
                </div>
                <div className="radio-item">
                  <input 
                    type="radio" 
                    id="tipo-juridica" 
                    name="tipo" 
                    value="Juridica"
                    checked={formData.tipo === 'Juridica'}
                    onChange={handleChange}
                  />
                  <label htmlFor="tipo-juridica">Jurídica</label>
                </div>
                <div className="radio-item">
                  <input 
                    type="radio" 
                    id="tipo-todos" 
                    name="tipo" 
                    value="Todos"
                    checked={formData.tipo === 'Todos'}
                    onChange={handleChange}
                  />
                  <label htmlFor="tipo-todos">Todos</label>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Tabela de fornecedores */}
        <div className="table-container">
          <div className="table-header">
            <div className="table-cell header-cell" style={{ flex: 1 }}>
              <span className="header-text">Razão Social / Código</span>
            </div>
            <div className="table-divider-header"></div>
            
            <div className="table-cell header-cell" style={{ flex: 1 }}>
              <span className="header-text">Nome Fantasia / CPF ou CNPJ</span>
            </div>
            <div className="table-divider-header"></div>
            
            <div className="table-cell header-cell" style={{ width: '280px' }}>
              <span className="header-text">Cidade / Estado</span>
            </div>
            <div className="table-divider-header"></div>
            
            <div className="table-cell header-cell" style={{ width: '280px' }}>
              <span className="header-text">Telefone / E-mail</span>
            </div>
          </div>

          <div className="table-body">
            {fornecedores.map((fornecedor, idx) => (
              <div className="table-row" key={idx}>
                <div className="table-cell" style={{ flex: 1 }}>
                  <div className="cell-content">
                    <div className="cell-text">{fornecedor.razaoSocial}</div>
                    <div className="cell-subtext">{fornecedor.codigo}</div>
                  </div>
                </div>
                <div className="table-divider-body"></div>
                
                <div className="table-cell" style={{ flex: 1 }}>
                  <div className="cell-content">
                    <div className="cell-text">{fornecedor.nomeFantasia}</div>
                    <div className="cell-subtext">{fornecedor.cpfCnpj}</div>
                  </div>
                </div>
                <div className="table-divider-body"></div>
                
                <div className="table-cell" style={{ width: '280px' }}>
                  <div className="cell-content">
                    <div className="cell-text">{fornecedor.cidade}</div>
                    <div className="cell-subtext">{fornecedor.estado}</div>
                  </div>
                </div>
                <div className="table-divider-body"></div>
                
                <div className="table-cell" style={{ width: '280px' }}>
                  <div className="cell-content">
                    <div className="cell-text">{fornecedor.telefone}</div>
                    <div className="cell-subtext">{fornecedor.email}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastrarFornecedor;
