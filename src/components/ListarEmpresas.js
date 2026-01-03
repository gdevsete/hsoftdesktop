import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import Dropdown from './Dropdown';
import './ListarEmpresas.css';

const ListarEmpresas = () => {
  // Dados dos dropdowns
  const contadores = [
    { value: '1', label: '1 - Amanda Castro - 214.563.987-40' },
    { value: '2', label: '2 - caio moura filho - 895.203.104-70' },
    { value: '3', label: '3 - Clara Nogueira - 392.584.710-27' },
    { value: '4', label: '4 - Felipe Moreira - 861.209.473-16' },
    { value: '5', label: '5 - Juliana Pires - 530.197.248-80' }
  ];

  const cidades = [
    { value: 'to', label: 'Tocantins (UF)' },
    { value: 'abreulandia', label: 'Abreulândia - TO' },
    { value: 'aguiarnopolis', label: 'Aguiarnópolis - TO' },
    { value: 'alianca', label: 'Aliança do Tocantins - TO' },
    { value: 'almas', label: 'Almas - TO' },
    { value: 'alvorada', label: 'Alvorada - TO' },
    { value: 'ananas', label: 'Ananás - TO' },
    { value: 'angico', label: 'Angico - TO' },
    { value: 'vila-bela', label: 'Vila Bela da Santíssima Trindade - TO' }
  ];

  const situacoes = [
    { value: 'todos', label: 'TODOS' },
    { value: 'ativo', label: 'ATIVO' },
    { value: 'inativo', label: 'INATIVO' }
  ];

  const empresas = [
    { 
      value: '1', 
      id: '1',
      name: 'PALMAS TEC DISTRIBUIDORA EIRELI - ME',
      subtitle: 'PALMAS TEC DISTRIBUIDORA',
      code: '78.654.201/0001-90'
    },
    { 
      value: '2', 
      id: '2',
      name: 'PALMAS INFO DISTRIBUIDORA LTDA - ME',
      subtitle: 'PALMAS INFO DISTRIBUIDORA',
      code: '31.552.007/0001-15'
    },
    { 
      value: '3', 
      id: '3',
      name: 'JALAPAO TECNOLOGIA E SISTEMAS LTDA',
      subtitle: 'JALAPAO SISTEMAS',
      code: '89.564.159/0001-30'
    },
    { 
      value: '4', 
      id: '4',
      name: 'TECNORTE ASSISTENCIA TECNICA AUTORIZADA EIRELI',
      subtitle: 'TECNORTE ASSISTENCIA AUTORIZADA',
      code: '11.855.200/0001-30'
    },
    { 
      value: '5', 
      id: '5',
      name: 'SUPRIMAIS SUPRIMENTOS E TECNOLOGIA LTDA',
      subtitle: 'SUPRIMAIS TECNOLOGIA',
      code: '35.999.277/0001-44'
    }
  ];

  const colaboradores = [
    { 
      value: '18', 
      id: '18',
      name: 'CECÍLIA',
      subtitle: 'CECÍLIA MEIRELES',
      code: '788.320.567-03'
    },
    { 
      value: '8', 
      id: '8',
      name: 'JOÃO',
      subtitle: 'JOÃO GUIMARÃES',
      code: '507.528.990-10'
    },
    { 
      value: '27', 
      id: '27',
      name: 'RAQUEL',
      subtitle: 'RAQUEL DE QUEIROZ',
      code: '109.692.433-58'
    },
    { 
      value: '4', 
      id: '4',
      name: 'SAULO',
      subtitle: 'SAULO CARVALHO NETO',
      code: '598.366.428-44'
    },
    { 
      value: '15', 
      id: '15',
      name: 'ZILDA',
      subtitle: 'ZILDA BORGES LIRA',
      code: '67.499.200/001-65'
    }
  ];

  const grupos = [
    { value: 'varejo', label: 'VAREJO' },
    { value: 'atacado', label: 'ATACADO' },
    { value: 'distribuidor', label: 'DISTRIBUIDOR' }
  ];

  const rotas = [
    { value: 'nordeste', label: 'NORDESTE' },
    { value: 'norte', label: 'NORTE' },
    { value: 'sul', label: 'SUL' },
    { value: 'centro-oeste', label: 'CENTRO-OESTE' }
  ];

  // Estados dos dropdowns
  const [contador, setContador] = useState('2 - caio moura filho - 895.203.104-70');
  const [cidade, setCidade] = useState('Vila Bela da Santíssima Trindade - TO');
  const [situacao, setSituacao] = useState('ATIVO');
  const [empresa, setEmpresa] = useState('1 - PALMAS TEC DISTRIBUIDORA EIRELI - ME - 78.654.201/0001-90');
  const [email, setEmail] = useState('atendimento@palmastec.com.br');
  const [celular, setCelular] = useState('(63) 928101-8101');
  const [colaborador, setColaborador] = useState('18 - CECÍLIA - 788.320.567-03');
  const [grupo, setGrupo] = useState('varejo');
  const [rota, setRota] = useState('nordeste');
  const [tipo, setTipo] = useState('todos');

  const handleContadorChange = (option) => setContador(option.label);
  const handleCidadeChange = (option) => setCidade(option.label);
  const handleSituacaoChange = (option) => setSituacao(option.label);
  const handleEmpresaChange = (option) => setEmpresa(`${option.id} - ${option.name} - ${option.code}`);
  const handleColaboradorChange = (option) => setColaborador(`${option.id} - ${option.name} - ${option.code}`);
  const handleGrupoChange = (option) => setGrupo(option.label);
  const handleRotaChange = (option) => setRota(option.label);

  const navigate = useNavigate();

  const handleIncludeClick = () => {
    navigate('/cadastrar-empresa');
  };

  const customButtons = (
    <>
      <button className="action-btn include-btn" onClick={handleIncludeClick}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="#008236" strokeWidth="1.5"/>
          <path d="M10 6.5V13.5M6.5 10H13.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>Incluir</span>
      </button>
      
      <button className="action-btn print-btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 6.5V2.5H15V6.5M5 14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V12C18 12.5304 17.7893 13.0391 17.4142 13.4142C17.0391 13.7893 16.5304 14 16 14H15M5 11H15V17.5H5V11Z" stroke="#008236" strokeWidth="1.5"/>
        </svg>
        <span>Imprimir</span>
      </button>
    </>
  );

  return (
    <div className="listar-empresas">
      <div className="background-overlay" />
      
      <Navbar />
      
      <div className="content-wrapper">
        <PageTitle title="EMPRESAS" buttons={customButtons} />
        
        {/* Form Container */}
        <div className="form-container-empresas">
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-field form-field-contador">
              <label className="field-label">Contador</label>
              <Dropdown
                value={contador}
                onChange={handleContadorChange}
                options={contadores}
                type="simple"
              />
            </div>
            <div className="form-field form-field-estado-cidade">
              <label className="field-label">Estado / Cidade</label>
              <Dropdown
                value={cidade}
                onChange={handleCidadeChange}
                options={cidades}
                type="simple"
              />
            </div>
            <div className="form-field form-field-situacao">
              <label className="field-label">Situação</label>
              <Dropdown
                value={situacao}
                onChange={handleSituacaoChange}
                options={situacoes}
                type="simple"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-field form-field-empresa">
              <label className="field-label">Empresa</label>
              <Dropdown
                value={empresa}
                onChange={handleEmpresaChange}
                options={empresas}
                type="super"
              />
            </div>
            <div className="form-field form-field-email">
              <label className="field-label">E-mail</label>
              <div className="input-field">
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="field-input"
                />
              </div>
            </div>
            <div className="form-field form-field-celular">
              <label className="field-label">Celular</label>
              <div className="input-field">
                <input 
                  type="text" 
                  value={celular} 
                  onChange={(e) => setCelular(e.target.value)}
                  className="field-input"
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="form-row">
            <div className="form-field form-field-colaborador">
              <label className="field-label">Colaborador</label>
              <Dropdown
                value={colaborador}
                onChange={handleColaboradorChange}
                options={colaboradores}
                type="super"
              />
            </div>
            <div className="form-field form-field-grupo">
              <label className="field-label">Grupo</label>
              <Dropdown
                value={grupo}
                onChange={handleGrupoChange}
                options={grupos}
                type="simple"
              />
            </div>
            <div className="form-field form-field-rota">
              <label className="field-label">Rota</label>
              <Dropdown
                value={rota}
                onChange={handleRotaChange}
                options={rotas}
                type="simple"
              />
            </div>
            <div className="form-field form-field-tipo">
              <label className="field-label">Tipo</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="tipo" 
                    value="fisica" 
                    checked={tipo === 'fisica'}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                  <span>Física</span>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="tipo" 
                    value="juridica" 
                    checked={tipo === 'juridica'}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                  <span>Jurídica</span>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="tipo" 
                    value="todos" 
                    checked={tipo === 'todos'}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                  <span>Todos</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-group-empresas">
          {/* Table Header */}
          <div className="table-header-empresas">
            <div className="table-header-cell razao-social">
              Razão Social / Código
            </div>
            <div className="table-header-divider"></div>
            <div className="table-header-cell nome-fantasia">
              Nome Fantasia / CPF ou CNPJ
            </div>
            <div className="table-header-divider-thick"></div>
            <div className="table-header-cell cidade-estado">
              Cidade / Estado
            </div>
            <div className="table-header-divider-thick"></div>
            <div className="table-header-cell telefone-email">
              Telefone / E-mail
            </div>
          </div>

          {/* Table Body */}
          <div className="table-body-empresas">
            {[...Array(9)].map((_, index) => (
              <div key={index} className="table-row-empresas">
                <div className="table-cell razao-social">
                  <div className="cell-primary">Hugo Victor Goulart de Oliveira</div>
                  <div className="cell-secondary">CÓD: 12345678</div>
                </div>
                <div className="table-cell-divider"></div>
                <div className="table-cell nome-fantasia">
                  <div className="cell-primary">WEB PALMAS PAPELARIA E INFORMATICA</div>
                  <div className="cell-secondary">CNPJ: 11.882.936/0001-00</div>
                </div>
                <div className="table-cell-divider-thick"></div>
                <div className="table-cell cidade-estado">
                  <div className="cell-primary">Paraíso do Tocantins</div>
                  <div className="cell-secondary">Tocantins</div>
                </div>
                <div className="table-cell-divider-thick"></div>
                <div className="table-cell telefone-email">
                  <div className="cell-primary">(63) 98418-0109 | (63) 3214-8140</div>
                  <div className="cell-secondary">webpalmasdistribuidora@gmail.com</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListarEmpresas;
