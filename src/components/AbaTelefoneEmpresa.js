
import React, { useState } from 'react';
import './CadastrarEmpresa.css';

const tiposTelefone = [
  'WHATSAPP',
  'Celular',
  'Comercial',
  'Residencial',
  'Recado',
  'Outro'
];

export default function AbaTelefoneEmpresa({ telefones = [], setTelefones }) {
  const [novoTelefone, setNovoTelefone] = useState({
    telefone: '',
    ramal: '',
    tipo: '',
    departamento: '',
    contato: '',
    observacao: ''
  });

  // Sample data se não houver telefones
  const sampleTelefones = [
    { telefone: '(11) 98877-6655', ramal: '06', tipo: 'WHATSAPP', departamento: 'FINANCEIRO', contato: 'JOÃO MARIA PEREIRA SILVA', observacao: 'LINHA DESATIVADA MOMENTANEAMENTE' },
    { telefone: '(11) 98877-6655', ramal: '06', tipo: 'WHATSAPP', departamento: 'FINANCEIRO', contato: 'JOÃO MARIA PEREIRA SILVA', observacao: 'LINHA DESATIVADA MOMENTANEAMENTE' },
    { telefone: '(11) 98877-6655', ramal: '06', tipo: 'WHATSAPP', departamento: 'FINANCEIRO', contato: 'JOÃO MARIA PEREIRA SILVA', observacao: 'LINHA DESATIVADA MOMENTANEAMENTE' }
  ];

  const displayTelefones = telefones && telefones.length > 0 ? telefones : sampleTelefones;

  const handleChange = (e) => {
    setNovoTelefone({ ...novoTelefone, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (novoTelefone.telefone.trim() === '') return;
    setTelefones([...telefones, novoTelefone]);
    setNovoTelefone({ telefone: '', ramal: '', tipo: '', departamento: '', contato: '', observacao: '' });
  };

  return (
    <div className="aba-telefone-empresa">
      <div className="telefone-form-section">
        {/* Primeira linha: Telefone, Ramal, Tipo, Departamento */}
        <div className="telefone-form-row">
          <div className="telefone-form-group" style={{ flex: 1.4 }}>
            <label className="telefone-label">Telefone</label>
            <input name="telefone" value={novoTelefone.telefone} onChange={handleChange} maxLength={15} placeholder="(00) 00000-0000" />
          </div>
          <div className="telefone-form-group" style={{ flex: 0.5 }}>
            <label className="telefone-label">Ramal</label>
            <input name="ramal" value={novoTelefone.ramal} onChange={handleChange} maxLength={6} placeholder="Ramal" />
          </div>
          <div className="telefone-form-group" style={{ flex: 0.9 }}>
            <label className="telefone-label">Tipo</label>
            <select name="tipo" value={novoTelefone.tipo} onChange={handleChange}>
              <option value="">Selecione</option>
              {tiposTelefone.map(tipo => <option key={tipo} value={tipo}>{tipo}</option>)}
            </select>
          </div>
          <div className="telefone-form-group" style={{ flex: 1.2 }}>
            <label className="telefone-label">Departamento</label>
            <input name="departamento" value={novoTelefone.departamento} onChange={handleChange} maxLength={30} placeholder="Departamento" />
          </div>
        </div>
        
        {/* Segunda linha: Contato, Observação, botão Adicionar */}
        <div className="telefone-form-row">
          <div className="telefone-form-group" style={{ flex: 1.1 }}>
            <label className="telefone-label">Contato</label>
            <input name="contato" value={novoTelefone.contato} onChange={handleChange} maxLength={30} placeholder="Contato" />
          </div>
          <div className="telefone-form-group" style={{ flex: 2 }}>
            <label className="telefone-label">Observação</label>
            <input name="observacao" value={novoTelefone.observacao} onChange={handleChange} maxLength={50} placeholder="Observação" />
          </div>
          <div className="telefone-form-group" style={{ display: 'flex', alignItems: 'flex-end', flex: 0.6, justifyContent: 'flex-end' }}>
            <button className="add-telefone-btn" onClick={handleAdd} title="Adicionar telefone">Adicionar</button>
          </div>
        </div>
      </div>

      {/* Tabela de telefones cadastrados - exatamente como Figma */}
      <div className="telefone-table-container">
        <div className="telefone-table-header">
          <div className="telefone-header-cell" style={{ width: '152px' }}>
            <span className="telefone-header-text">Telefone</span>
            <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
              <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2"/>
            </svg>
          </div>
          <div className="telefone-header-divider"></div>
          <div className="telefone-header-cell" style={{ width: '93px' }}>
            <span className="telefone-header-text">Ramal</span>
            <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
              <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2"/>
            </svg>
          </div>
          <div className="telefone-header-divider"></div>
          <div className="telefone-header-cell" style={{ width: '173px' }}>
            <span className="telefone-header-text">Tipo</span>
            <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
              <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2"/>
            </svg>
          </div>
          <div className="telefone-header-divider"></div>
          <div className="telefone-header-cell" style={{ width: '219px' }}>
            <span className="telefone-header-text">Departamento</span>
            <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
              <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2"/>
            </svg>
          </div>
          <div className="telefone-header-divider"></div>
          <div className="telefone-header-cell" style={{ width: '219px' }}>
            <span className="telefone-header-text">Contato</span>
            <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
              <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2"/>
            </svg>
          </div>
          <div className="telefone-header-divider"></div>
          <div className="telefone-header-cell" style={{ flex: 1 }}>
            <span className="telefone-header-text">Observação</span>
            <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
              <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2"/>
            </svg>
          </div>
        </div>

        <div className="telefone-table-body">
          {displayTelefones.map((t, idx) => (
            <div className="telefone-table-row" key={idx}>
              <div className="telefone-cell" style={{ width: '152px' }}>
                <span className="telefone-cell-text">{t.telefone}</span>
              </div>
              <div className="telefone-cell-divider"></div>
              <div className="telefone-cell" style={{ width: '93px' }}>
                <span className="telefone-cell-text">{t.ramal}</span>
              </div>
              <div className="telefone-cell-divider"></div>
              <div className="telefone-cell" style={{ width: '173px' }}>
                <span className="telefone-cell-text">{t.tipo}</span>
              </div>
              <div className="telefone-cell-divider"></div>
              <div className="telefone-cell" style={{ width: '219px' }}>
                <span className="telefone-cell-text">{t.departamento}</span>
              </div>
              <div className="telefone-cell-divider"></div>
              <div className="telefone-cell" style={{ width: '219px' }}>
                <span className="telefone-cell-text">{t.contato}</span>
              </div>
              <div className="telefone-cell-divider"></div>
              <div className="telefone-cell" style={{ flex: 1 }}>
                <span className="telefone-cell-text">{t.observacao}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
