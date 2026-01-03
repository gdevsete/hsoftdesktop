import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import DatePicker from './DatePicker';
import './CadastrarFornecedorForm.css';

const tiposTelefone = ['WHATSAPP', 'CELULAR', 'COMERCIAL', 'RESIDENCIAL', 'RECADO', 'OUTRO'];

function CadastrarFornecedorForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('endereco');

  const [formData, setFormData] = useState({
    codigo: '96128',
    cpfCnpj: '11.882.936/0001-00',
    rgIe: '1233215648-8',
    isento: false,
    contribuinte: '',
    regimeTributario: '',
    status: 'DESATIVADO',
    nomeRazao: 'PALMAS TEC DISTRIBUIDORA EIRELI - ME',
    nomeSocial: 'PALMAS TEC DISTRIBUIDORA'
  });

  const [enderecoData, setEnderecoData] = useState({
    cep: '77.006-070',
    endereco: 'Quadra 106 norte, alameda 17',
    bairro: 'plano diretor norte',
    numero: '09',
    complemento: 'atrás da jk, no fundo da lotérica',
    cidade: 'palmas - to',
    tipo: 'residencial'
  });

  const [enderecos, setEnderecos] = useState([
    {
      tipo: 'Comercial',
      cep: '77021033',
      endereco: '410 Sul, Alameda 12 Lt. 10 Qd.8',
      bairro: 'Plano Diretor Sul',
      numero: '1012',
      complemento: 'Ao lado do supermercado',
      cidade: 'Palmas - TO'
    },
    {
      tipo: 'Comercial',
      cep: '77021033',
      endereco: '410 Sul, Alameda 12 Lt. 10 Qd.8',
      bairro: 'Plano Diretor Sul',
      numero: '1012',
      complemento: 'Ao lado do supermercado',
      cidade: 'Palmas - TO'
    },
    {
      tipo: 'Comercial',
      cep: '77021033',
      endereco: '410 Sul, Alameda 12 Lt. 10 Qd.8',
      bairro: 'Plano Diretor Sul',
      numero: '1012',
      complemento: 'Ao lado do supermercado',
      cidade: 'Palmas - TO'
    }
  ]);

  const [novoTelefone, setNovoTelefone] = useState({
    telefone: '',
    ramal: '',
    tipo: '',
    departamento: '',
    contato: '',
    observacao: ''
  });

  const [telefones, setTelefones] = useState([
    {
      telefone: '(11) 98877-6655',
      ramal: '06',
      tipo: 'WHATSAPP',
      departamento: 'FINANCEIRO',
      contato: 'JOÃO MARIA PEREIRA SILVA',
      observacao: 'LINHA DESATIVADA MOMENTANEAMENTE'
    },
    {
      telefone: '(11) 98877-6655',
      ramal: '06',
      tipo: 'WHATSAPP',
      departamento: 'FINANCEIRO',
      contato: 'JOÃO MARIA PEREIRA SILVA',
      observacao: 'LINHA DESATIVADA MOMENTANEAMENTE'
    },
    {
      telefone: '(11) 98877-6655',
      ramal: '06',
      tipo: 'WHATSAPP',
      departamento: 'FINANCEIRO',
      contato: 'JOÃO MARIA PEREIRA SILVA',
      observacao: 'LINHA DESATIVADA MOMENTANEAMENTE'
    }
  ]);

  const [novoEmail, setNovoEmail] = useState({
    email: '',
    descricao: '',
    nota: true,
    boleto: false,
    venda: true,
    orcamento: true
  });

  const [emails, setEmails] = useState([
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      nota: true,
      boleto: false,
      venda: true,
      orcamento: true
    },
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      nota: true,
      boleto: true,
      venda: true,
      orcamento: true
    },
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      nota: true,
      boleto: false,
      venda: true,
      orcamento: false
    },
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      nota: true,
      boleto: true,
      venda: false,
      orcamento: true
    }
  ]);

  const [complementoData, setComplementoData] = useState({
    vendedor: 'João fernandes',
    grupo: 'atacado',
    subgrupo: 'atacado',
    rota: 'região norte',
    transportadora: '151 - atual cargas - 42.937.321/0004-15',
    tabela: '',
    prospectador: '',
    comissao: '',
    cadastro: '01/10/2025',
    nascimento: '10/10/2010'
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleEnderecoChange = (e) => {
    const { name, value } = e.target;
    setEnderecoData({
      ...enderecoData,
      [name]: value
    });
  };

  const handleSave = () => {
    console.log('Salvar fornecedor:', formData);
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      navigate('/fornecedores');
    }, 3000);
  };

  const handleCancel = () => {
    navigate('/fornecedores');
  };

  const handleAddEndereco = () => {
    setEnderecos([...enderecos, { ...enderecoData }]);
    setEnderecoData({
      cep: '',
      endereco: '',
      bairro: '',
      numero: '',
      complemento: '',
      cidade: '',
      tipo: ''
    });
  };

  const handleTelefoneChange = (e) => {
    const { name, value } = e.target;
    setNovoTelefone({
      ...novoTelefone,
      [name]: value
    });
  };

  const handleAddTelefone = () => {
    if (!novoTelefone.telefone.trim()) return;
    setTelefones([...telefones, { ...novoTelefone }]);
    setNovoTelefone({
      telefone: '',
      ramal: '',
      tipo: '',
      departamento: '',
      contato: '',
      observacao: ''
    });
  };

  const handleEmailInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEmail({
      ...novoEmail,
      [name]: value
    });
  };

  const handleComplementoChange = (e) => {
    const { name, value } = e.target;
    setComplementoData({
      ...complementoData,
      [name]: value
    });
  };

  const handleEmailToggleChange = (field) => {
    setNovoEmail({
      ...novoEmail,
      [field]: !novoEmail[field]
    });
  };

  const handleAddEmail = () => {
    if (!novoEmail.email.trim()) return;

    setEmails([...emails, { ...novoEmail }]);
    setNovoEmail({
      email: '',
      descricao: '',
      nota: true,
      boleto: false,
      venda: true,
      orcamento: true
    });
  };

  const renderStatusIcon = (value) => (
    <span className="email-status-icon" aria-label={value ? 'Marcado' : 'Desmarcado'}>
      {value ? (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M3 9L6.5 12.5L13 4" stroke="#008236" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 4L12 12M12 4L4 12" stroke="#C10007" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );

  const tabs = [
    { id: 'endereco', label: 'Endereço' },
    { id: 'telefone', label: 'Telefone' },
    { id: 'email', label: 'E-mail' },
    { id: 'complemento', label: 'Complemento' },
    { id: 'fiscal', label: 'Fiscal' },
    { id: 'financeiro', label: 'Financeiro' },
    { id: 'referencias', label: 'Referências' },
    { id: 'anexos', label: 'Anexos' }
  ];

  const customButtons = (
    <>
      <button className="action-btn cancel-btn" onClick={handleCancel}>
        <img
          src="https://www.figma.com/api/mcp/asset/5e62f61d-cb02-4fbc-a387-4369ea300fc9"
          alt="Cancelar"
          style={{ width: 16, height: 16, marginRight: 5 }}
        />
        <span>Cancelar</span>
      </button>
      <button className="action-btn save-btn" onClick={handleSave}>
        <img
          src="https://www.figma.com/api/mcp/asset/9242654e-b4c9-44a5-8981-f58865883f9f"
          alt="Salvar"
          style={{ width: 16, height: 16, marginRight: 5 }}
        />
        <span>Salvar</span>
      </button>
    </>
  );

  return (
    <div className="cadastrar-fornecedor-form">
      <Navbar />
      <div className="content-wrapper">
        <PageTitle title="CADASTRAR FORNECEDOR" buttons={customButtons} />

        <div className="form-container">
          {/* Linha 1 */}
          <div className="form-row">
            <div className="input-wrapper" style={{ width: '201.667px' }}>
              <label>Código</label>
              <input
                type="text"
                name="codigo"
                value={formData.codigo}
                onChange={handleChange}
                disabled
                className="disabled-input"
              />
            </div>
            <div className="input-wrapper" style={{ width: '201.667px' }}>
              <label>CPF / CNPJ</label>
              <input
                type="text"
                name="cpfCnpj"
                value={formData.cpfCnpj}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper input-with-isento" style={{ width: '201.667px' }}>
              <label>RG / IE</label>
              <div className="input-container-isento">
                <input
                  type="text"
                  name="rgIe"
                  value={formData.rgIe}
                  onChange={handleChange}
                />
                <label className="isento-label">
                  <input
                    type="checkbox"
                    name="isento"
                    checked={formData.isento}
                    onChange={handleChange}
                    className="isento-checkbox"
                  />
                  <span>Isento</span>
                </label>
              </div>
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Contribuinte</label>
              <select
                name="contribuinte"
                value={formData.contribuinte}
                onChange={handleChange}
              >
                <option value=""></option>
              </select>
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Regime Tributário</label>
              <select
                name="regimeTributario"
                value={formData.regimeTributario}
                onChange={handleChange}
              >
                <option value=""></option>
              </select>
            </div>
            <div className="input-wrapper" style={{ width: '110px' }}>
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="DESATIVADO">DESATIVADO</option>
                <option value="ATIVADO">ATIVADO</option>
              </select>
            </div>
          </div>

          {/* Linha 2 */}
          <div className="form-row">
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Nome / Razão Social</label>
              <input
                type="text"
                name="nomeRazao"
                value={formData.nomeRazao}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Nome Social / Nome Fantasia</label>
              <input
                type="text"
                name="nomeSocial"
                value={formData.nomeSocial}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Inner Section com tabs */}
        <div className="inner-section">
          {/* Tabs */}
          <div className="inner-menu-container">
            <div className="inner-menu">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`inner-menu-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="inner-menu-border"></div>
          </div>

          {/* Conteúdo da tab ativa */}
          {activeTab === 'endereco' && (
            <>
              {/* Form de endereço */}
              <div className="inner-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ width: '114px' }}>
                    <label>CEP</label>
                    <input
                      type="text"
                      name="cep"
                      value={enderecoData.cep}
                      onChange={handleEnderecoChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ width: '733px' }}>
                    <label>Endereço</label>
                    <input
                      type="text"
                      name="endereco"
                      value={enderecoData.endereco}
                      onChange={handleEnderecoChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ width: '249px' }}>
                    <label>Bairro</label>
                    <input
                      type="text"
                      name="bairro"
                      value={enderecoData.bairro}
                      onChange={handleEnderecoChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Número</label>
                    <input
                      type="text"
                      name="numero"
                      value={enderecoData.numero}
                      onChange={handleEnderecoChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-wrapper" style={{ width: '423px' }}>
                    <label>Complemento</label>
                    <input
                      type="text"
                      name="complemento"
                      value={enderecoData.complemento}
                      onChange={handleEnderecoChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ width: '424px' }}>
                    <label>Cidade - UF</label>
                    <select
                      name="cidade"
                      value={enderecoData.cidade}
                      onChange={handleEnderecoChange}
                    >
                      <option value="palmas - to">PALMAS - TO</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Tipo</label>
                    <select
                      name="tipo"
                      value={enderecoData.tipo}
                      onChange={handleEnderecoChange}
                    >
                      <option value="residencial">RESIDENCIAL</option>
                      <option value="comercial">COMERCIAL</option>
                    </select>
                  </div>
                </div>

                <div className="form-row" style={{ justifyContent: 'flex-end', padding: '10px 0' }}>
                  <button className="btn-add" onClick={handleAddEndereco}>
                    Adicionar
                  </button>
                </div>
              </div>

              {/* Tabela de endereços */}
              <div className="inner-table-container">
                <div className="inner-table-header">
                  <div className="inner-table-cell" style={{ width: '135px' }}>Tipo</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '96px' }}>CEP</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '261px' }}>Endereço</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '163px' }}>Bairro</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '89px' }}>Número</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ flex: 1 }}>Complemento</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '158px' }}>Cidade - UF</div>
                </div>

                <div className="inner-table-body">
                  {enderecos.map((end, index) => (
                    <div className="inner-table-row" key={index}>
                      <div className="inner-table-cell" style={{ width: '135px' }}>{end.tipo}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '96px' }}>{end.cep}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '261px' }}>{end.endereco}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '163px' }}>{end.bairro}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '89px' }}>{end.numero}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>{end.complemento}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '158px' }}>{end.cidade}</div>
                    </div>
                  ))}
                  {/* Linhas vazias */}
                  {[...Array(7)].map((_, index) => (
                    <div className="inner-table-row" key={`empty-${index}`}>
                      <div className="inner-table-cell" style={{ width: '135px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '96px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '261px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '163px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '89px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '158px' }}>&nbsp;</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'telefone' && (
            <div className="telefone-tab">
              <div className="telefone-form-section">
                <div className="telefone-form-row">
                  <div className="telefone-form-group" style={{ flex: 1.4 }}>
                    <label className="telefone-label">Telefone</label>
                    <input
                      name="telefone"
                      value={novoTelefone.telefone}
                      onChange={handleTelefoneChange}
                      maxLength={15}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="telefone-form-group" style={{ flex: 0.5 }}>
                    <label className="telefone-label">Ramal</label>
                    <input
                      name="ramal"
                      value={novoTelefone.ramal}
                      onChange={handleTelefoneChange}
                      maxLength={6}
                      placeholder="Ramal"
                    />
                  </div>
                  <div className="telefone-form-group" style={{ flex: 0.9 }}>
                    <label className="telefone-label">Tipo</label>
                    <select name="tipo" value={novoTelefone.tipo} onChange={handleTelefoneChange}>
                      <option value="">Selecione</option>
                      {tiposTelefone.map((tipo) => (
                        <option key={tipo} value={tipo}>
                          {tipo}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="telefone-form-group" style={{ flex: 1.2 }}>
                    <label className="telefone-label">Departamento</label>
                    <input
                      name="departamento"
                      value={novoTelefone.departamento}
                      onChange={handleTelefoneChange}
                      maxLength={30}
                      placeholder="Departamento"
                    />
                  </div>
                </div>

                <div className="telefone-form-row">
                  <div className="telefone-form-group" style={{ flex: 1.1 }}>
                    <label className="telefone-label">Contato</label>
                    <input
                      name="contato"
                      value={novoTelefone.contato}
                      onChange={handleTelefoneChange}
                      maxLength={30}
                      placeholder="Contato"
                    />
                  </div>
                  <div className="telefone-form-group" style={{ flex: 2 }}>
                    <label className="telefone-label">Observação</label>
                    <input
                      name="observacao"
                      value={novoTelefone.observacao}
                      onChange={handleTelefoneChange}
                      maxLength={50}
                      placeholder="Observação"
                    />
                  </div>
                </div>

                <div className="telefone-form-row telefone-add-row">
                  <div className="telefone-add-wrapper">
                    <button className="add-telefone-btn" onClick={handleAddTelefone} title="Adicionar telefone">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>

              <div className="telefone-table-container">
                <div className="telefone-table-header">
                  <div className="telefone-header-cell" style={{ width: '152px' }}>
                    <span className="telefone-header-text">Telefone</span>
                    <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="telefone-header-divider"></div>
                  <div className="telefone-header-cell" style={{ width: '93px' }}>
                    <span className="telefone-header-text">Ramal</span>
                    <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="telefone-header-divider"></div>
                  <div className="telefone-header-cell" style={{ width: '173px' }}>
                    <span className="telefone-header-text">Tipo</span>
                    <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="telefone-header-divider"></div>
                  <div className="telefone-header-cell" style={{ width: '219px' }}>
                    <span className="telefone-header-text">Departamento</span>
                    <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="telefone-header-divider"></div>
                  <div className="telefone-header-cell" style={{ width: '219px' }}>
                    <span className="telefone-header-text">Contato</span>
                    <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="telefone-header-divider"></div>
                  <div className="telefone-header-cell" style={{ flex: 1 }}>
                    <span className="telefone-header-text">Observação</span>
                    <svg className="telefone-header-icon" viewBox="0 0 10 5" fill="none">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>

                <div className="telefone-table-body">
                  {telefones.map((tel, index) => (
                    <div className="telefone-table-row" key={index}>
                      <div className="telefone-cell" style={{ width: '152px' }}>
                        <span className="telefone-cell-text">{tel.telefone}</span>
                      </div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '93px' }}>
                        <span className="telefone-cell-text">{tel.ramal}</span>
                      </div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '173px' }}>
                        <span className="telefone-cell-text">{tel.tipo}</span>
                      </div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '219px' }}>
                        <span className="telefone-cell-text">{tel.departamento}</span>
                      </div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '219px' }}>
                        <span className="telefone-cell-text">{tel.contato}</span>
                      </div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ flex: 1 }}>
                        <span className="telefone-cell-text">{tel.observacao}</span>
                      </div>
                    </div>
                  ))}

                  {[...Array(5)].map((_, idx) => (
                    <div className="telefone-table-row" key={`empty-telefone-${idx}`}>
                      <div className="telefone-cell" style={{ width: '152px' }}>&nbsp;</div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '93px' }}>&nbsp;</div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '173px' }}>&nbsp;</div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '219px' }}>&nbsp;</div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ width: '219px' }}>&nbsp;</div>
                      <div className="telefone-cell-divider"></div>
                      <div className="telefone-cell" style={{ flex: 1 }}>&nbsp;</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="email-tab">
              <div className="email-form">
                <div className="email-row">
                  <div className="email-field" style={{ flex: 1 }}>
                    <label className="email-label">E-mail</label>
                    <input
                      name="email"
                      value={novoEmail.email}
                      onChange={handleEmailInputChange}
                      placeholder="palmastec@palmastec.com"
                    />
                  </div>
                  <div className="email-field" style={{ flex: 1 }}>
                    <label className="email-label">Descrição</label>
                    <input
                      name="descricao"
                      value={novoEmail.descricao}
                      onChange={handleEmailInputChange}
                      placeholder="E-MAIL PRINCIPAL"
                    />
                  </div>
                </div>

                <div className="fornecedor-email-checkboxes">
                  <label className="fornecedor-email-checkbox">
                    <input
                      type="checkbox"
                      checked={novoEmail.nota}
                      onChange={() => handleEmailToggleChange('nota')}
                    />
                    <span>Nota</span>
                  </label>
                  <label className="fornecedor-email-checkbox">
                    <input
                      type="checkbox"
                      checked={novoEmail.boleto}
                      onChange={() => handleEmailToggleChange('boleto')}
                    />
                    <span>Boleto</span>
                  </label>
                  <label className="fornecedor-email-checkbox">
                    <input
                      type="checkbox"
                      checked={novoEmail.venda}
                      onChange={() => handleEmailToggleChange('venda')}
                    />
                    <span>Venda</span>
                  </label>
                  <label className="fornecedor-email-checkbox">
                    <input
                      type="checkbox"
                      checked={novoEmail.orcamento}
                      onChange={() => handleEmailToggleChange('orcamento')}
                    />
                    <span>Orçamento</span>
                  </label>
                </div>

                <div className="email-add-row">
                  <button className="add-email-btn" onClick={handleAddEmail} title="Adicionar e-mail">
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="email-table-container">
                <div className="email-table-header">
                  <div className="email-header-cell" style={{ width: '327px' }}>
                    <span className="email-header-text">Email</span>
                    <svg className="email-header-icon" viewBox="0 0 10 5" fill="none" aria-hidden="true">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="email-header-divider"></div>
                  <div className="email-header-cell" style={{ width: '381px' }}>
                    <span className="email-header-text">Descrição</span>
                    <svg className="email-header-icon" viewBox="0 0 10 5" fill="none" aria-hidden="true">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="email-header-divider"></div>
                  <div className="email-header-cell" style={{ flex: 1 }}>
                    <span className="email-header-text">Nota</span>
                    <svg className="email-header-icon" viewBox="0 0 10 5" fill="none" aria-hidden="true">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="email-header-divider"></div>
                  <div className="email-header-cell" style={{ flex: 1 }}>
                    <span className="email-header-text">Boleto</span>
                    <svg className="email-header-icon" viewBox="0 0 10 5" fill="none" aria-hidden="true">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="email-header-divider"></div>
                  <div className="email-header-cell" style={{ flex: 1 }}>
                    <span className="email-header-text">Venda</span>
                    <svg className="email-header-icon" viewBox="0 0 10 5" fill="none" aria-hidden="true">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div className="email-header-divider"></div>
                  <div className="email-header-cell" style={{ flex: 1 }}>
                    <span className="email-header-text">Orçamento</span>
                    <svg className="email-header-icon" viewBox="0 0 10 5" fill="none" aria-hidden="true">
                      <path d="M1 1L5 4L9 1" stroke="#008236" strokeWidth="1.2" />
                    </svg>
                  </div>
                </div>

                <div className="email-table-body">
                  {emails.map((item, index) => (
                    <div className="email-table-row" key={index}>
                      <div className="email-cell" style={{ width: '327px' }}>
                        <span className="email-cell-text">{item.email}</span>
                      </div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ width: '381px' }}>
                        <span className="email-cell-text">{item.descricao}</span>
                      </div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>
                        {renderStatusIcon(item.nota)}
                      </div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>
                        {renderStatusIcon(item.boleto)}
                      </div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>
                        {renderStatusIcon(item.venda)}
                      </div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>
                        {renderStatusIcon(item.orcamento)}
                      </div>
                    </div>
                  ))}

                  {[...Array(6)].map((_, idx) => (
                    <div className="email-table-row" key={`empty-email-${idx}`}>
                      <div className="email-cell" style={{ width: '327px' }}>&nbsp;</div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ width: '381px' }}>&nbsp;</div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>&nbsp;</div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>&nbsp;</div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>&nbsp;</div>
                      <div className="email-cell-divider"></div>
                      <div className="email-cell" style={{ flex: 1 }}>&nbsp;</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'complemento' && (
            <div className="inner-form">
              <div className="form-row">
                <div className="form-field" style={{ width: '383px' }}>
                  <label>Vendedor</label>
                  <select name="vendedor" value={complementoData.vendedor} onChange={handleComplementoChange}>
                    <option>João fernandes</option>
                  </select>
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                  <label>Grupo</label>
                  <select name="grupo" value={complementoData.grupo} onChange={handleComplementoChange}>
                    <option>atacado</option>
                  </select>
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                  <label>Subgrupo</label>
                  <select name="subgrupo" value={complementoData.subgrupo} onChange={handleComplementoChange}>
                    <option>atacado</option>
                  </select>
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                  <label>Rota</label>
                  <select name="rota" value={complementoData.rota} onChange={handleComplementoChange}>
                    <option>região norte</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field" style={{ width: '383px' }}>
                  <label>Trasnportadora</label>
                  <select name="transportadora" value={complementoData.transportadora} onChange={handleComplementoChange}>
                    <option>151 - atual cargas - 42.937.321/0004-15</option>
                  </select>
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                  <label>Tabela</label>
                  <select name="tabela" value={complementoData.tabela} onChange={handleComplementoChange}>
                    <option value=""></option>
                  </select>
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                  <label>Prospectador</label>
                  <select name="prospectador" value={complementoData.prospectador} onChange={handleComplementoChange}>
                    <option value=""></option>
                  </select>
                </div>
                <div className="form-field" style={{ flex: 1 }}>
                  <label>Comissão</label>
                  <input 
                    type="text" 
                    name="comissao" 
                    value={complementoData.comissao} 
                    onChange={handleComplementoChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field" style={{ width: '187px' }}>
                  <label>Cadastro</label>
                  <input 
                    type="text" 
                    name="cadastro" 
                    value={complementoData.cadastro} 
                    onChange={handleComplementoChange}
                    disabled
                    style={{ backgroundColor: '#f5f5f5' }}
                  />
                </div>
                <div className="form-field" style={{ width: '186px' }}>
                  <label>Nascimento / Fundação</label>
                  <div className="input-with-icon">
                    <input 
                      type="text" 
                      name="nascimento" 
                      value={complementoData.nascimento} 
                      onChange={handleComplementoChange}
                    />
                    <button className="calendar-icon-btn" onClick={() => setShowDatePicker(true)}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16 2H15V0H13V2H7V0H5V2H4C2.9 2 2 2.9 2 4V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H4V8H16V18ZM16 6H4V4H16V6Z" fill="#008236"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-row" style={{ justifyContent: 'flex-end', paddingTop: '10px', paddingBottom: '10px' }}>
                <button className="btn-secondary">Remover</button>
                <button className="btn-primary" style={{ width: '70px' }}>Alterar</button>
              </div>
            </div>
          )}

          {showDatePicker && (
            <DatePicker
              onClose={() => setShowDatePicker(false)}
              onSelect={(date) => {
                setComplementoData({ ...complementoData, nascimento: date });
                setShowDatePicker(false);
              }}
            />
          )}

          {showSuccessToast && (
            <div className="success-toast">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 0.5C4.08 0.5 0.5 4.08 0.5 8.5C0.5 12.92 4.08 16.5 8.5 16.5C12.92 16.5 16.5 12.92 16.5 8.5C16.5 4.08 12.92 0.5 8.5 0.5ZM6.9 12.1L3.3 8.5L4.364 7.436L6.9 9.964L12.636 4.228L13.7 5.3L6.9 12.1Z" fill="#016630"/>
              </svg>
              <p>Fornecedor cadastrado com sucesso!</p>
            </div>
          )}

          {activeTab === 'fiscal' && (
            <div className="inner-form">
              <p>Conteúdo da aba Fiscal (a implementar)</p>
            </div>
          )}

          {activeTab === 'financeiro' && (
            <div className="inner-form">
              <p>Conteúdo da aba Financeiro (a implementar)</p>
            </div>
          )}

          {activeTab === 'referencias' && (
            <div className="inner-form">
              <p>Conteúdo da aba Referências (a implementar)</p>
            </div>
          )}

          {activeTab === 'anexos' && (
            <div className="inner-form">
              <p>Conteúdo da aba Anexos (a implementar)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CadastrarFornecedorForm;
