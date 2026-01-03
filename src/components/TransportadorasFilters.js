import React, { useState } from 'react';
import './FormContainer.css';
import Dropdown from './Dropdown';

const TransportadorasFilters = () => {
  const [transportadora, setTransportadora] = useState('400 - XT TRANSPORTADORA LTDA - 50.726.099/0001-11');
  const [estadoCidade, setEstadoCidade] = useState('VILA BELA DA SANTISSIMA TRINDADE - TO');
  const [situacao, setSituacao] = useState('ATIVO');
  const [empresa, setEmpresa] = useState('2 - PALMAS INFO DISTRIBUIDORA LTDA - ME - 31.552.007/0001-15');
  const [fornecedor, setFornecedor] = useState('17 - PRIME 7 IMPORTACOES LTDA - 73.388.422/0001-00');
  const [grupo, setGrupo] = useState('VAREJO');
  const [tipo, setTipo] = useState('fisica');

  const transportadoraOptions = [
    { value: 'xt', label: '400 - XT TRANSPORTADORA LTDA - 50.726.099/0001-11' },
    { value: 'alpha', label: '250 - ALPHA LOG LTDA - 21.111.222/0001-99' }
  ];

  const estadoCidadeOptions = [
    { value: 'vila-bela', label: 'VILA BELA DA SANTISSIMA TRINDADE - TO' },
    { value: 'palmas', label: 'PALMAS - TO' }
  ];

  const situacaoOptions = [
    { value: 'ativo', label: 'ATIVO' },
    { value: 'inativo', label: 'INATIVO' }
  ];

  const empresaOptions = [
    { value: 'palmas-info', label: '2 - PALMAS INFO DISTRIBUIDORA LTDA - ME - 31.552.007/0001-15' },
    { value: 'supritec', label: '3 - JALAPAO TECNOLOGIA E SISTEMAS LTDA - 89.564.159/0001-30' }
  ];

  const fornecedorOptions = [
    { value: 'prime-7', label: '17 - PRIME 7 IMPORTACOES LTDA - 73.388.422/0001-00' },
    { value: 'acme', label: '18 - ACME LOGISTICA LTDA - 12.345.678/0001-90' }
  ];

  const grupoOptions = [
    { value: 'varejo', label: 'VAREJO' },
    { value: 'atacado', label: 'ATACADO' }
  ];

  return (
    <div className="form-container">
      <div className="form-row">
        <div className="input-group primary-field-width">
          <label>Transportadora</label>
          <Dropdown
            value={transportadora}
            onChange={(option) => setTransportadora(option.label)}
            options={transportadoraOptions}
            placeholder="Selecione a transportadora"
          />
        </div>

        <div className="input-group" style={{ width: '390px' }}>
          <label>Estado / Cidade</label>
          <Dropdown
            value={estadoCidade}
            onChange={(option) => setEstadoCidade(option.label)}
            options={estadoCidadeOptions}
            placeholder="Selecione"
          />
        </div>

        <div className="input-group" style={{ width: '297px' }}>
          <label>Situação</label>
          <Dropdown
            value={situacao}
            onChange={(option) => setSituacao(option.label)}
            options={situacaoOptions}
            placeholder="Selecione"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="input-group primary-field-width">
          <label>Empresa</label>
          <Dropdown
            value={empresa}
            onChange={(option) => setEmpresa(option.label)}
            options={empresaOptions}
            placeholder="Selecione a empresa"
          />
        </div>

        <div className="input-group" style={{ width: '390px' }}>
          <label>Email</label>
          <div className="input-field">
            <span>xttrans@gmail.com</span>
          </div>
        </div>

        <div className="input-group" style={{ width: '297px' }}>
          <label>Celular</label>
          <div className="input-field">
            <span>(11) 927560-4477</span>
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="input-group primary-field-width">
          <label>Fornecedor</label>
          <Dropdown
            value={fornecedor}
            onChange={(option) => setFornecedor(option.label)}
            options={fornecedorOptions}
            placeholder="Selecione o fornecedor"
          />
        </div>

        <div className="input-group" style={{ width: '220px' }}>
          <label>Grupo</label>
          <Dropdown
            value={grupo}
            onChange={(option) => setGrupo(option.label)}
            options={grupoOptions}
            placeholder="Selecione o grupo"
          />
        </div>

        <div className="input-group" style={{ width: '298px' }}>
          <label>Tipo</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="tipo"
                value="fisica"
                checked={tipo === 'fisica'}
                onChange={() => setTipo('fisica')}
              />
              <span>Física</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="tipo"
                value="juridica"
                checked={tipo === 'juridica'}
                onChange={() => setTipo('juridica')}
              />
              <span>Jurídica</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="tipo"
                value="todos"
                checked={tipo === 'todos'}
                onChange={() => setTipo('todos')}
              />
              <span>Todos</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportadorasFilters;
