import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import Toast from './Toast';
import DatePicker from './DatePicker';
import './CadastrarFornecedorForm.css';

function CadastrarUsuarioForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('endereco');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    endereco: 'QUADRA 106 NORTE, ALAMEDA 17',
    bairro: 'PLANO DIRETOR NORTE',
    numero: '09',
    complemento: 'ATRÁS DA JK, NO FUNDO DA LOTÉRICA',
    cidadeUf: 'PALMAS - TO',
    tipo: 'RESIDENCIAL'
  });

  const [enderecos, setEnderecos] = useState([
    {
      tipo: 'COMERCIAL',
      cep: '77021033',
      endereco: '410 SUL, ALAMEDA 12 LT. 10 QD.8',
      bairro: 'PLANO DIRETOR SUL',
      numero: '1012',
      complemento: 'AO LADO DO SUPERMERCADO',
      cidadeUf: 'PALMAS - TO'
    },
    {
      tipo: 'COMERCIAL',
      cep: '77021033',
      endereco: '410 SUL, ALAMEDA 12 LT. 10 QD.8',
      bairro: 'PLANO DIRETOR SUL',
      numero: '1012',
      complemento: 'AO LADO DO SUPERMERCADO',
      cidadeUf: 'PALMAS - TO'
    },
    {
      tipo: 'COMERCIAL',
      cep: '77021033',
      endereco: '410 SUL, ALAMEDA 12 LT. 10 QD.8',
      bairro: 'PLANO DIRETOR SUL',
      numero: '1012',
      complemento: 'AO LADO DO SUPERMERCADO',
      cidadeUf: 'PALMAS - TO'
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
      tipo: 'Whatsapp',
      departamento: 'Financeiro',
      contato: 'João Maria Pereira Silva',
      observacao: 'Linha desativada momentaneamente'
    },
    {
      telefone: '(11) 98877-6655',
      ramal: '06',
      tipo: 'Whatsapp',
      departamento: 'Financeiro',
      contato: 'João Maria Pereira Silva',
      observacao: 'Linha desativada momentaneamente'
    },
    {
      telefone: '(11) 98877-6655',
      ramal: '06',
      tipo: 'Whatsapp',
      departamento: 'Financeiro',
      contato: 'João Maria Pereira Silva',
      observacao: 'Linha desativada momentaneamente'
    }
  ]);

  const [novoEmail, setNovoEmail] = useState({
    email: '',
    descricao: '',
    todos: false,
    comercial: false,
    financeiro: false,
    fiscal: false,
    nota: false,
    boleto: false,
    venda: false,
    orcamento: false
  });

  const [emails, setEmails] = useState([
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      todos: true,
      comercial: false,
      financeiro: true,
      fiscal: true,
      nota: true,
      boleto: false,
      venda: true,
      orcamento: true
    },
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      todos: true,
      comercial: true,
      financeiro: true,
      fiscal: true,
      nota: true,
      boleto: true,
      venda: true,
      orcamento: true
    },
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      todos: true,
      comercial: true,
      financeiro: true,
      fiscal: true,
      nota: true,
      boleto: true,
      venda: true,
      orcamento: true
    },
    {
      email: 'palmastec@palmastec.com',
      descricao: 'Email principal do setor administrativo',
      todos: true,
      comercial: true,
      financeiro: true,
      fiscal: false,
      nota: false,
      boleto: false,
      venda: true,
      orcamento: true
    }
  ]);

  const [complementoData, setComplementoData] = useState({
    vendedor: 'JOÃO FERNANDES',
    grupo: 'ATACADO',
    subgrupo: 'REGIÃO NORTE',
    rota: '',
    transportadora: '151 - ATUAL CARGAS - 42.937.321/0004-15',
    tabela: '',
    prospectador: '',
    comissao: '',
    cadastro: '01/10/2025',
    nascimento: '10/10/2010'
  });

  const [loginData, setLoginData] = useState({
    login: 'joao.f@hotmail.com',
    senha: '',
    confirmarSenha: '',
    mostrarSenha: false,
    mostrarConfirmarSenha: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEnderecoInputChange = (e) => {
    const { name, value, type } = e.target;
    setEnderecoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTelefoneInputChange = (e) => {
    const { name, value } = e.target;
    setNovoTelefone(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddTelefone = () => {
    if (novoTelefone.telefone.trim()) {
      setTelefones(prev => [...prev, novoTelefone]);
      setNovoTelefone({
        telefone: '',
        ramal: '',
        tipo: '',
        departamento: '',
        contato: '',
        observacao: ''
      });
    }
  };

  const handleEmailInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNovoEmail(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddEmail = () => {
    if (novoEmail.email.trim()) {
      setEmails(prev => [...prev, novoEmail]);
      setNovoEmail({
        email: '',
        descricao: '',
        todos: false,
        comercial: false,
        financeiro: false,
        fiscal: false,
        nota: false,
        boleto: false,
        venda: false,
        orcamento: false
      });
    }
  };

  const handleComplementoChange = (e) => {
    const { name, value } = e.target;
    setComplementoData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleMostrarSenha = () => {
    setLoginData(prev => ({
      ...prev,
      mostrarSenha: !prev.mostrarSenha
    }));
  };

  const toggleMostrarConfirmarSenha = () => {
    setLoginData(prev => ({
      ...prev,
      mostrarConfirmarSenha: !prev.mostrarConfirmarSenha
    }));
  };

  const handleResetarLogin = () => {
    setLoginData({
      login: '',
      senha: '',
      confirmarSenha: '',
      mostrarSenha: false,
      mostrarConfirmarSenha: false
    });
  };

  const handleAddEndereco = () => {
    setEnderecos(prev => [...prev, enderecoData]);
    setEnderecoData({
      cep: '',
      endereco: '',
      bairro: '',
      numero: '',
      complemento: '',
      cidadeUf: '',
      tipo: 'RESIDENCIAL'
    });
  };

  const handleSave = () => {
    setShowSuccessToast(true);
    setTimeout(() => {
      navigate('/usuarios');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/usuarios');
  };

  const buttons = (
    <>
      <button className="action-btn cancel-btn" onClick={handleCancel}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M15.5 4.5L4.5 15.5M4.5 4.5L15.5 15.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>Cancelar</span>
      </button>
      <button className="action-btn save-btn" onClick={handleSave}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M2.5 7.5V3.5C2.5 2.96957 2.71071 2.46086 3.08579 2.08579C3.46086 1.71071 3.96957 1.5 4.5 1.5H15.5L18.5 4.5V16.5C18.5 17.0304 18.2893 17.5391 17.9142 17.9142C17.5391 18.2893 17.0304 18.5 16.5 18.5H4.5C3.96957 18.5 3.46086 18.2893 3.08579 17.9142C2.71071 17.5391 2.5 17.0304 2.5 16.5V7.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 1.5V4.5H14V1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Salvar</span>
      </button>
    </>
  );

  return (
    <div className="cadastrar-fornecedor-form">
      <Navbar />
      <div className="content-wrapper">
        <PageTitle title="CADASTRAR USUÁRIO" buttons={buttons} />
        
        <div className="form-container">
          {/* Linha 1 */}
          <div className="form-row">
            <div className="input-wrapper" style={{ width: '201.667px' }}>
              <label>Código</label>
              <input
                type="text"
                name="codigo"
                value={formData.codigo}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper input-with-isento" style={{ width: '201.667px' }}>
              <label>RG / IE</label>
              <div className="input-container-isento">
                <input
                  type="text"
                  name="rgIe"
                  value={formData.rgIe}
                  onChange={handleInputChange}
                />
                <label className="isento-label">
                  <input
                    type="checkbox"
                    name="isento"
                    checked={formData.isento}
                    onChange={handleInputChange}
                  />
                  <span>Isento</span>
                </label>
              </div>
            </div>
            <div className="input-wrapper" style={{ width: '247.5px' }}>
              <label>Contribuinte</label>
              <select
                name="contribuinte"
                value={formData.contribuinte}
                onChange={handleInputChange}
              >
                <option value="">Selecione...</option>
              </select>
            </div>
            <div className="input-wrapper" style={{ width: '247.5px' }}>
              <label>Regime Tributário</label>
              <select
                name="regimeTributario"
                value={formData.regimeTributario}
                onChange={handleInputChange}
              >
                <option value="">Selecione...</option>
              </select>
            </div>
            <div className="input-wrapper" style={{ width: '110px' }}>
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="DESATIVADO">DESATIVADO</option>
                <option value="ATIVO">ATIVO</option>
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
                onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Nome Social / Nome Fantasia</label>
              <input
                type="text"
                name="nomeSocial"
                value={formData.nomeSocial}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Inner Section com tabs */}
        <div className="inner-section">
          {/* Tabs */}
          <div className="inner-menu-container">
            <div className="inner-menu">
              <button
                className={`inner-menu-item ${activeTab === 'endereco' ? 'active' : ''}`}
                onClick={() => setActiveTab('endereco')}
              >
                Endereço
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'telefone' ? 'active' : ''}`}
                onClick={() => setActiveTab('telefone')}
              >
                Telefone
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'email' ? 'active' : ''}`}
                onClick={() => setActiveTab('email')}
              >
                E-mail
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'complemento' ? 'active' : ''}`}
                onClick={() => setActiveTab('complemento')}
              >
                Complemento
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'financeiro' ? 'active' : ''}`}
                onClick={() => setActiveTab('financeiro')}
              >
                Financeiro
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'permissao' ? 'active' : ''}`}
                onClick={() => setActiveTab('permissao')}
              >
                Permissão
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'anexos' ? 'active' : ''}`}
                onClick={() => setActiveTab('anexos')}
              >
                Anexos
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'escala' ? 'active' : ''}`}
                onClick={() => setActiveTab('escala')}
              >
                Escala
              </button>
              <button
                className={`inner-menu-item ${activeTab === 'logs' ? 'active' : ''}`}
                onClick={() => setActiveTab('logs')}
              >
                Logs
              </button>
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
                      onChange={handleEnderecoInputChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ width: '733px' }}>
                    <label>Endereço</label>
                    <input
                      type="text"
                      name="endereco"
                      value={enderecoData.endereco}
                      onChange={handleEnderecoInputChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ width: '249px' }}>
                    <label>Bairro</label>
                    <input
                      type="text"
                      name="bairro"
                      value={enderecoData.bairro}
                      onChange={handleEnderecoInputChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Número</label>
                    <input
                      type="text"
                      name="numero"
                      value={enderecoData.numero}
                      onChange={handleEnderecoInputChange}
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
                      onChange={handleEnderecoInputChange}
                    />
                  </div>
                  <div className="input-wrapper" style={{ width: '424px' }}>
                    <label>Cidade - UF</label>
                    <select
                      name="cidadeUf"
                      value={enderecoData.cidadeUf}
                      onChange={handleEnderecoInputChange}
                    >
                      <option value="PALMAS - TO">PALMAS - TO</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Tipo</label>
                    <select
                      name="tipo"
                      value={enderecoData.tipo}
                      onChange={handleEnderecoInputChange}
                    >
                      <option value="RESIDENCIAL">RESIDENCIAL</option>
                      <option value="COMERCIAL">COMERCIAL</option>
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
                      <div className="inner-table-cell" style={{ width: '158px' }}>{end.cidadeUf}</div>
                    </div>
                  ))}

                  {[...Array(Math.max(0, 6 - enderecos.length))].map((_, index) => (
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
            <>
              <div className="inner-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Telefone</label>
                    <input
                      type="text"
                      name="telefone"
                      value={novoTelefone.telefone}
                      onChange={handleTelefoneInputChange}
                      placeholder="(63) 98765-4321"
                    />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Ramal</label>
                    <input
                      type="text"
                      name="ramal"
                      value={novoTelefone.ramal}
                      onChange={handleTelefoneInputChange}
                      placeholder="06"
                    />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Tipo</label>
                    <select
                      name="tipo"
                      value={novoTelefone.tipo}
                      onChange={handleTelefoneInputChange}
                    >
                      <option value="">Selecione</option>
                      <option value="Whatsapp">Whatsapp</option>
                      <option value="Telefone">Telefone</option>
                      <option value="Celular">Celular</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Departamento</label>
                    <select
                      name="departamento"
                      value={novoTelefone.departamento}
                      onChange={handleTelefoneInputChange}
                    >
                      <option value="">Selecione</option>
                      <option value="Financeiro">Financeiro</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Administrativo">Administrativo</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Contato</label>
                    <input
                      type="text"
                      name="contato"
                      value={novoTelefone.contato}
                      onChange={handleTelefoneInputChange}
                      placeholder="João Maria Pereira Silva"
                    />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Observação</label>
                    <input
                      type="text"
                      name="observacao"
                      value={novoTelefone.observacao}
                      onChange={handleTelefoneInputChange}
                      placeholder="Linha desativada"
                    />
                  </div>
                </div>

                <div className="form-row" style={{ justifyContent: 'flex-end' }}>
                  <button className="btn-add" onClick={handleAddTelefone}>
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="inner-table-container">
                <div className="inner-table-header">
                  <div className="inner-table-cell" style={{ width: '152px' }}>Telefone</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '93px' }}>Ramal</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '173px' }}>Tipo</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '219px' }}>Departamento</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '219px' }}>Contato</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ flex: 1 }}>Observação</div>
                </div>

                <div className="inner-table-body">
                  {telefones.map((tel, index) => (
                    <div className="inner-table-row" key={index}>
                      <div className="inner-table-cell" style={{ width: '152px' }}>{tel.telefone}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '93px' }}>{tel.ramal}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '173px' }}>{tel.tipo}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '219px' }}>{tel.departamento}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '219px' }}>{tel.contato}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>{tel.observacao}</div>
                    </div>
                  ))}

                  {[...Array(Math.max(0, 6 - telefones.length))].map((_, index) => (
                    <div className="inner-table-row" key={`empty-tel-${index}`}>
                      <div className="inner-table-cell" style={{ width: '152px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '93px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '173px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '219px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '219px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>&nbsp;</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'email' && (
            <>
              <div className="inner-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={novoEmail.email}
                      onChange={handleEmailInputChange}
                      placeholder="palmastec@palmastec.com"
                    />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Descrição</label>
                    <input
                      type="text"
                      name="descricao"
                      value={novoEmail.descricao}
                      onChange={handleEmailInputChange}
                      placeholder="Email principal"
                    />
                  </div>
                </div>

                <div className="form-row" style={{ alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        name="todos"
                        checked={novoEmail.todos}
                        onChange={handleEmailInputChange}
                      />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', color: '#404040', lineHeight: '18px' }}>Todos</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        name="comercial"
                        checked={novoEmail.comercial}
                        onChange={handleEmailInputChange}
                      />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', color: '#404040', lineHeight: '18px' }}>Comercial</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        name="financeiro"
                        checked={novoEmail.financeiro}
                        onChange={handleEmailInputChange}
                      />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', color: '#404040', lineHeight: '18px' }}>Financeiro</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        name="fiscal"
                        checked={novoEmail.fiscal}
                        onChange={handleEmailInputChange}
                      />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '12px', color: '#404040', lineHeight: '18px' }}>Fiscal</span>
                    </label>
                  </div>
                </div>

                <div className="form-row" style={{ justifyContent: 'flex-end' }}>
                  <button className="btn-add" onClick={handleAddEmail}>
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="inner-table-container">
                <div className="inner-table-header">
                  <div className="inner-table-cell" style={{ width: '327px' }}>Email</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ width: '381px' }}>Descrição</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ flex: 1 }}>Nota</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ flex: 1 }}>Boleto</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ flex: 1 }}>Venda</div>
                  <div className="inner-divider"></div>
                  <div className="inner-table-cell" style={{ flex: 1 }}>Orçamento</div>
                </div>

                <div className="inner-table-body">
                  {emails.map((e, index) => (
                    <div className="inner-table-row" key={index}>
                      <div className="inner-table-cell" style={{ width: '327px' }}>{e.email}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '381px' }}>{e.descricao}</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1, textAlign: 'center', fontSize: '18px', color: e.nota ? '#008236' : '#c10007' }}>
                        {e.nota ? '✓' : '✕'}
                      </div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1, textAlign: 'center', fontSize: '18px', color: e.boleto ? '#008236' : '#c10007' }}>
                        {e.boleto ? '✓' : '✕'}
                      </div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1, textAlign: 'center', fontSize: '18px', color: e.venda ? '#008236' : '#c10007' }}>
                        {e.venda ? '✓' : '✕'}
                      </div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1, textAlign: 'center', fontSize: '18px', color: e.orcamento ? '#008236' : '#c10007' }}>
                        {e.orcamento ? '✓' : '✕'}
                      </div>
                    </div>
                  ))}

                  {[...Array(Math.max(0, 6 - emails.length))].map((_, index) => (
                    <div className="inner-table-row" key={`empty-email-${index}`}>
                      <div className="inner-table-cell" style={{ width: '327px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ width: '381px' }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>&nbsp;</div>
                      <div className="inner-divider"></div>
                      <div className="inner-table-cell" style={{ flex: 1 }}>&nbsp;</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'complemento' && (
            <div className="inner-form">
              <div className="form-row">
                <div className="input-wrapper" style={{ width: '383px' }}>
                  <label>Vendedor</label>
                  <select
                    name="vendedor"
                    value={complementoData.vendedor}
                    onChange={handleComplementoChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="JOÃO FERNANDES">JOÃO FERNANDES</option>
                    <option value="MARIA SILVA">MARIA SILVA</option>
                    <option value="PEDRO SANTOS">PEDRO SANTOS</option>
                  </select>
                </div>
                <div className="input-wrapper" style={{ flex: 1 }}>
                  <label>Grupo</label>
                  <select
                    name="grupo"
                    value={complementoData.grupo}
                    onChange={handleComplementoChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="ATACADO">ATACADO</option>
                    <option value="VAREJO">VAREJO</option>
                    <option value="DISTRIBUIDOR">DISTRIBUIDOR</option>
                  </select>
                </div>
                <div className="input-wrapper" style={{ flex: 1 }}>
                  <label>Subgrupo</label>
                  <select
                    name="subgrupo"
                    value={complementoData.subgrupo}
                    onChange={handleComplementoChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="REGIÃO NORTE">REGIÃO NORTE</option>
                    <option value="REGIÃO SUL">REGIÃO SUL</option>
                    <option value="REGIÃO CENTRO">REGIÃO CENTRO</option>
                  </select>
                </div>
                <div className="input-wrapper" style={{ flex: 1 }}>
                  <label>Rota</label>
                  <select
                    name="rota"
                    value={complementoData.rota}
                    onChange={handleComplementoChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="ROTA 1">ROTA 1</option>
                    <option value="ROTA 2">ROTA 2</option>
                    <option value="ROTA 3">ROTA 3</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="input-wrapper" style={{ width: '383px' }}>
                  <label>Transportadora</label>
                  <select
                    name="transportadora"
                    value={complementoData.transportadora}
                    onChange={handleComplementoChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="151 - ATUAL CARGAS - 42.937.321/0004-15">151 - ATUAL CARGAS - 42.937.321/0004-15</option>
                    <option value="201 - TRANSPORTADORA XYZ - 12.345.678/0001-90">201 - TRANSPORTADORA XYZ - 12.345.678/0001-90</option>
                  </select>
                </div>
                <div className="input-wrapper" style={{ flex: 1 }}>
                  <label>Tabela</label>
                  <select
                    name="tabela"
                    value={complementoData.tabela}
                    onChange={handleComplementoChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="TABELA A">TABELA A</option>
                    <option value="TABELA B">TABELA B</option>
                    <option value="TABELA C">TABELA C</option>
                  </select>
                </div>
                <div className="input-wrapper" style={{ flex: 1 }}>
                  <label>Prospectador</label>
                  <select
                    name="prospectador"
                    value={complementoData.prospectador}
                    onChange={handleComplementoChange}
                  >
                    <option value="">Selecione...</option>
                    <option value="PROSPECTADOR 1">PROSPECTADOR 1</option>
                    <option value="PROSPECTADOR 2">PROSPECTADOR 2</option>
                  </select>
                </div>
                <div className="input-wrapper" style={{ flex: 1 }}>
                  <label>Comissão</label>
                  <input
                    type="text"
                    name="comissao"
                    value={complementoData.comissao}
                    onChange={handleComplementoChange}
                    placeholder="0,00%"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-wrapper" style={{ width: '187px' }}>
                  <label>Cadastro</label>
                  <input
                    type="text"
                    name="cadastro"
                    value={complementoData.cadastro}
                    disabled
                    style={{ backgroundColor: '#f5f5f5', cursor: 'not-allowed' }}
                  />
                </div>
                <div className="input-wrapper input-with-calendar" style={{ width: '186px' }}>
                  <label>Nascimento/Fundação</label>
                  <div className="input-calendar-container">
                    <input
                      type="text"
                      name="nascimento"
                      value={complementoData.nascimento}
                      onChange={handleComplementoChange}
                      placeholder="dd/mm/aaaa"
                    />
                    <button className="calendar-icon-btn" onClick={() => setShowDatePicker(true)} type="button">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.6667 1.33333V4" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.33333 1.33333V4" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 6.66667H14" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="form-row" style={{ justifyContent: 'flex-end', gap: '10px' }}>
                <button 
                  className="btn-cancel"
                  onClick={() => {
                    setComplementoData({
                      vendedor: '',
                      grupo: '',
                      subgrupo: '',
                      rota: '',
                      transportadora: '',
                      tabela: '',
                      prospectador: '',
                      comissao: '',
                      cadastro: '',
                      nascimento: ''
                    });
                  }}
                >
                  Remover
                </button>
                <button 
                  className="btn-add"
                  style={{ width: '70px' }}
                  onClick={() => {
                    console.log('Dados complemento:', complementoData);
                  }}
                >
                  Alterar
                </button>
              </div>
            </div>
          )}

          {activeTab === 'login' && (
            <div className="inner-form">
              <div className="form-row" style={{ alignItems: 'flex-end', justifyContent: 'flex-start', gap: '12px' }}>
                <div className="input-wrapper" style={{ width: '320px' }}>
                  <label>Login</label>
                  <input
                    type="text"
                    name="login"
                    value={loginData.login}
                    onChange={handleLoginChange}
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                <div className="input-wrapper" style={{ flex: '0 0 320px' }}>
                  <label>Senha</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={loginData.mostrarSenha ? 'text' : 'password'}
                      name="senha"
                      value={loginData.senha}
                      onChange={handleLoginChange}
                      placeholder="Digite sua senha"
                      style={{ paddingRight: '32px' }}
                    />
                    <button
                      type="button"
                      onClick={toggleMostrarSenha}
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        {loginData.mostrarSenha ? (
                          <>
                            <path d="M11.8417 8.15833L8.15833 11.8417C7.73333 11.4167 7.5 10.8833 7.5 10C7.5 8.61667 8.61667 7.5 10 7.5C10.8833 7.5 11.4167 7.73333 11.8417 8.15833Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.85 4.8C13.45 3.9 11.775 3.3 10 3.3C7.05833 3.3 4.3 5.075 2.1 8.175C1.45 9.2 1.45 10.8 2.1 11.825C2.87 12.8917 3.7 13.8167 4.5 14.5833" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.5 16.325C8.3 16.575 9.13333 16.7 10 16.7C12.9417 16.7 15.7 14.925 17.9 11.825C18.55 10.8 18.55 9.2 17.9 8.175C17.5917 7.68333 17.275 7.2 16.95 6.75" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.925 10.5833C12.7 11.75 11.7417 12.7083 10.575 12.9333" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.15833 11.8417L2.5 17.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 2.5L11.8417 8.15833" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </>
                        ) : (
                          <>
                            <path d="M7.9917 10C7.9917 8.9 8.9 8 10 8C11.1 8 12.0083 8.9 12.0083 10C12.0083 11.1 11.1 12.0083 10 12.0083C8.9 12.0083 7.9917 11.1 7.9917 10Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 16.7C12.9417 16.7 15.7 14.925 17.9 11.825C18.55 10.8 18.55 9.2 17.9 8.175C15.7 5.075 12.9417 3.3 10 3.3C7.05833 3.3 4.3 5.075 2.1 8.175C1.45 9.2 1.45 10.8 2.1 11.825C4.3 14.925 7.05833 16.7 10 16.7Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="input-wrapper" style={{ flex: 1 }}>
                  <label>Confirmar Senha</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={loginData.mostrarConfirmarSenha ? 'text' : 'password'}
                      name="confirmarSenha"
                      value={loginData.confirmarSenha}
                      onChange={handleLoginChange}
                      placeholder="Confirme sua senha"
                      style={{ paddingRight: '32px' }}
                    />
                    <button
                      type="button"
                      onClick={toggleMostrarConfirmarSenha}
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        {loginData.mostrarConfirmarSenha ? (
                          <>
                            <path d="M11.8417 8.15833L8.15833 11.8417C7.73333 11.4167 7.5 10.8833 7.5 10C7.5 8.61667 8.61667 7.5 10 7.5C10.8833 7.5 11.4167 7.73333 11.8417 8.15833Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.85 4.8C13.45 3.9 11.775 3.3 10 3.3C7.05833 3.3 4.3 5.075 2.1 8.175C1.45 9.2 1.45 10.8 2.1 11.825C2.87 12.8917 3.7 13.8167 4.5 14.5833" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.5 16.325C8.3 16.575 9.13333 16.7 10 16.7C12.9417 16.7 15.7 14.925 17.9 11.825C18.55 10.8 18.55 9.2 17.9 8.175C17.5917 7.68333 17.275 7.2 16.95 6.75" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.925 10.5833C12.7 11.75 11.7417 12.7083 10.575 12.9333" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.15833 11.8417L2.5 17.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.5 2.5L11.8417 8.15833" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </>
                        ) : (
                          <>
                            <path d="M7.9917 10C7.9917 8.9 8.9 8 10 8C11.1 8 12.0083 8.9 12.0083 10C12.0083 11.1 11.1 12.0083 10 12.0083C8.9 12.0083 7.9917 11.1 7.9917 10Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 16.7C12.9417 16.7 15.7 14.925 17.9 11.825C18.55 10.8 18.55 9.2 17.9 8.175C15.7 5.075 12.9417 3.3 10 3.3C7.05833 3.3 4.3 5.075 2.1 8.175C1.45 9.2 1.45 10.8 2.1 11.825C4.3 14.925 7.05833 16.7 10 16.7Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </>
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                <button
                  className="btn-cancel"
                  style={{ width: '71px', height: '28px', marginLeft: '12px' }}
                  onClick={handleResetarLogin}
                >
                  Resetar
                </button>
                <button
                  className="btn-add"
                  style={{ width: '71px', height: '28px' }}
                  onClick={() => {
                    if (loginData.senha !== loginData.confirmarSenha) {
                      alert('As senhas não coincidem!');
                      return;
                    }
                    console.log('Login salvo:', loginData);
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          )}

          {activeTab === 'financeiro' && (
            <div className="inner-form">
              <p style={{padding: '20px', textAlign: 'center', color: '#999'}}>
                Aba Financeiro - Em desenvolvimento
              </p>
            </div>
          )}

          {activeTab === 'permissao' && (
            <div className="inner-form">
              <p style={{padding: '20px', textAlign: 'center', color: '#999'}}>
                Aba Permissão - Em desenvolvimento
              </p>
            </div>
          )}

          {activeTab === 'anexos' && (
            <div className="inner-form">
              <p style={{padding: '20px', textAlign: 'center', color: '#999'}}>
                Aba Anexos - Em desenvolvimento
              </p>
            </div>
          )}

          {activeTab === 'escala' && (
            <div className="inner-form">
              <p style={{padding: '20px', textAlign: 'center', color: '#999'}}>
                Aba Escala - Em desenvolvimento
              </p>
            </div>
          )}

          {activeTab === 'logs' && (
            <div className="inner-form">
              <p style={{padding: '20px', textAlign: 'center', color: '#999'}}>
                Aba Logs - Em desenvolvimento
              </p>
            </div>
          )}
        </div>
      </div>

      <Toast 
        message="Usuário salvo com sucesso!"
        isVisible={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        position="bottom-center"
      />

      {showDatePicker && (
        <DatePicker
          onClose={() => setShowDatePicker(false)}
          onSelect={(date) => {
            setComplementoData(prev => ({
              ...prev,
              nascimento: date
            }));
            setShowDatePicker(false);
          }}
          initialDate={complementoData.nascimento}
        />
      )}
    </div>
  );
}

export default CadastrarUsuarioForm;
