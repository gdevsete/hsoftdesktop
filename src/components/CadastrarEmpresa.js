import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import './CadastrarEmpresa.css';
import AbaTelefoneEmpresa from './AbaTelefoneEmpresa';
import AbaLogotipoEmpresa from './AbaLogotipoEmpresa';
import AbaFechamentoEmpresa from './AbaFechamentoEmpresa';

function AbaEmailEmpresa({ emails, setEmails }) {
  const [novoEmail, setNovoEmail] = useState({
    email: '',
    senha: '',
    servidorSmtp: '',
    porta: '',
    protocolo: 'TLS',
    autenticacao: 'SIM',
    comercial: false,
    financeiro: false,
    fiscal: false,
    todos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNovoEmail({
      ...novoEmail,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAdd = () => {
    if (!novoEmail.email.trim() || !novoEmail.servidorSmtp.trim()) return;
    const emailObj = {
      email: novoEmail.email,
      senha: novoEmail.senha,
      servidorSmtp: novoEmail.servidorSmtp,
      porta: novoEmail.porta,
      protocolo: novoEmail.protocolo,
      autenticacao: novoEmail.autenticacao,
      comercial: novoEmail.comercial,
      financeiro: novoEmail.financeiro,
      fiscal: novoEmail.fiscal
    };
    setEmails([...emails, emailObj]);
    setNovoEmail({
      email: '',
      senha: '',
      servidorSmtp: '',
      porta: '',
      protocolo: 'TLS',
      autenticacao: 'SIM',
      comercial: false,
      financeiro: false,
      fiscal: false,
      todos: false
    });
  };

  return (
    <div className="aba-email-empresa">
      {/* Seção de entrada */}
      <div className="email-form-section">
        <div className="email-form-row">
          <div className="email-form-group" style={{ flex: 1.5 }}>
            <label className="email-label">E-mail</label>
            <input name="email" value={novoEmail.email} onChange={handleChange} maxLength={60} placeholder="E-mail" />
          </div>
          <div className="email-form-group" style={{ flex: 1.5 }}>
            <label className="email-label">Senha</label>
            <input name="senha" type="password" value={novoEmail.senha} onChange={handleChange} maxLength={50} placeholder="Senha" />
          </div>
          <div className="email-form-group" style={{ flex: 1.5 }}>
            <label className="email-label">Servidor SMTP</label>
            <input name="servidorSmtp" value={novoEmail.servidorSmtp} onChange={handleChange} maxLength={60} placeholder="Servidor SMTP" />
          </div>
          <div className="email-form-group" style={{ flex: 0.8 }}>
            <label className="email-label">Porta</label>
            <input name="porta" value={novoEmail.porta} onChange={handleChange} maxLength={5} placeholder="Porta" />
          </div>
          <div className="email-form-group" style={{ flex: 1 }}>
            <label className="email-label">Protocolo</label>
            <select name="protocolo" value={novoEmail.protocolo} onChange={handleChange}>
              <option>TLS</option>
              <option>SSL</option>
              <option>PLAIN</option>
            </select>
          </div>
          <div className="email-form-group" style={{ flex: 1 }}>
            <label className="email-label">Autenticação</label>
            <select name="autenticacao" value={novoEmail.autenticacao} onChange={handleChange}>
              <option>SIM</option>
              <option>NÃO</option>
            </select>
          </div>
        </div>

        {/* Checkboxes de filtro */}
        <div className="empresa-email-checkboxes">
          <label className="empresa-email-checkbox">
            <input type="checkbox" name="todos" checked={novoEmail.todos} onChange={handleChange} />
            <span>Todos</span>
          </label>
          <label className="empresa-email-checkbox">
            <input type="checkbox" name="comercial" checked={novoEmail.comercial} onChange={handleChange} />
            <span>Comercial</span>
          </label>
          <label className="empresa-email-checkbox">
            <input type="checkbox" name="financeiro" checked={novoEmail.financeiro} onChange={handleChange} />
            <span>Financeiro</span>
          </label>
          <label className="empresa-email-checkbox">
            <input type="checkbox" name="fiscal" checked={novoEmail.fiscal} onChange={handleChange} />
            <span>Fiscal</span>
          </label>
        </div>

        {/* Botão Adicionar */}
        <div className="email-add-btn-row">
          <button className="add-email-btn" onClick={handleAdd}>Adicionar</button>
        </div>
      </div>

      {/* Tabela de emails cadastrados */}
      <div className="email-table-wrapper">
        <table className="email-table">
          <thead>
            <tr>
              <th>E-mail</th>
              <th>Servidor SMTP</th>
              <th>Porta</th>
              <th>Protocolo</th>
              <th>Comercial</th>
              <th>Financeiro</th>
              <th>Fiscal</th>
              <th>Autenticação</th>
            </tr>
          </thead>
          <tbody>
            {emails.length === 0 ? (
              <tr>
                <td colSpan="8" className="empty-row">&nbsp;</td>
              </tr>
            ) : (
              emails.map((e, idx) => (
                <tr key={idx}>
                  <td>{e.email}</td>
                  <td>{e.servidorSmtp}</td>
                  <td>{e.porta}</td>
                  <td>{e.protocolo}</td>
                  <td className="table-icon">
                    {e.comercial ? (
                      <span className="icon-check">✓</span>
                    ) : (
                      <span className="icon-close">✕</span>
                    )}
                  </td>
                  <td className="table-icon">
                    {e.financeiro ? (
                      <span className="icon-check">✓</span>
                    ) : (
                      <span className="icon-close">✕</span>
                    )}
                  </td>
                  <td className="table-icon">
                    {e.fiscal ? (
                      <span className="icon-check">✓</span>
                    ) : (
                      <span className="icon-close">✕</span>
                    )}
                  </td>
                  <td className="table-icon">
                    {e.autenticacao === 'SIM' ? (
                      <span className="icon-check">✓</span>
                    ) : (
                      <span className="icon-close">✕</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AbaCertificadoEmpresa({ certificados, setCertificados }) {
  const [novoCert, setNovoCert] = useState({ certificado: '', senha: '' });

  const handleChange = (e) => {
    setNovoCert({ ...novoCert, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!novoCert.certificado.trim()) return;
    const row = {
      certificado: novoCert.certificado,
      senha: novoCert.senha,
      empresa: 'PALMAS TEC DISTRIBUIDORA',
      modelo: 'A1',
      numeroSerie: '7A339DC2I721129F',
      certificadora: 'CERTIFICA BRASIL',
      validade: '10/10/2010'
    };
    setCertificados([...certificados, row]);
    setNovoCert({ certificado: '', senha: '' });
  };

  return (
    <div className="aba-certificado-empresa">
      <div className="certificado-top-row">
        <div className="certificado-field">
          <div className="certificado-input-wrapper">
            <input name="certificado" value={novoCert.certificado} onChange={handleChange} placeholder="Certificado A1" />
            <button className="icon-btn" type="button" aria-label="Buscar">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9.91667 9.91667L12.25 12.25" stroke="#008236" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="6.41667" cy="6.41667" r="4.25" stroke="#008236" strokeWidth="1.4"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="certificado-field">
          <div className="certificado-input-wrapper">
            <input name="senha" value={novoCert.senha} onChange={handleChange} placeholder="Senha" type="password" />
            <button className="icon-btn" type="button" aria-label="Mostrar senha">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.167 7s2.333-3.5 5.833-3.5S12.833 7 12.833 7s-2.333 3.5-5.833 3.5S1.167 7 1.167 7Z" stroke="#008236" strokeWidth="1.2"/>
                <circle cx="7" cy="7" r="1.8" stroke="#008236" strokeWidth="1.2"/>
              </svg>
            </button>
          </div>
        </div>

        <button className="ok-certificado-btn" onClick={handleAdd}>OK</button>
      </div>

      <div className="certificado-table-wrapper">
        <table className="certificado-table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Modelo</th>
              <th>Nº de Série</th>
              <th>Certificadora</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            {certificados.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-row">&nbsp;</td>
              </tr>
            ) : (
              certificados.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.empresa}</td>
                  <td>{c.modelo}</td>
                  <td>{c.numeroSerie}</td>
                  <td>{c.certificadora}</td>
                  <td>{c.validade}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CadastrarEmpresa() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('endereco');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCancel = () => {
    navigate('/empresas');
  };

  const [telefones, setTelefones] = useState([]);
  const [emails, setEmails] = useState([
    { email: 'palmastec@palmastec.com', senha: '●●●●●●●●●●●●●', servidorSmtp: 'smtp.gmail.com', porta: '587', protocolo: 'TLS', autenticacao: 'SIM', comercial: true, financeiro: true, fiscal: true },
    { email: 'palmastec@palmastec.com', senha: '●●●●●●●●●●●●●', servidorSmtp: 'smtp.gmail.com', porta: '587', protocolo: 'TLS', autenticacao: 'SIM', comercial: true, financeiro: false, fiscal: true },
    { email: 'palmastec@palmastec.com', senha: '●●●●●●●●●●●●●', servidorSmtp: 'smtp.gmail.com', porta: '587', protocolo: 'TLS', autenticacao: 'SIM', comercial: true, financeiro: true, fiscal: false },
    { email: 'palmastec@palmastec.com', senha: '●●●●●●●●●●●●●', servidorSmtp: 'smtp.gmail.com', porta: '587', protocolo: 'TLS', autenticacao: 'SIM', comercial: false, financeiro: false, fiscal: true }
  ]);
  const [certificados, setCertificados] = useState([
    { empresa: 'PALMAS TEC DISTRIBUIDORA', modelo: 'A1', numeroSerie: '7A339DC2I721129F', certificadora: 'CERTIFICA BRASIL', validade: '10/10/2010' },
    { empresa: 'PALMAS TEC DISTRIBUIDORA', modelo: 'A1', numeroSerie: '7A339DC2I721129F', certificadora: 'CERTIFICA BRASIL', validade: '10/10/2010' },
    { empresa: 'PALMAS TEC DISTRIBUIDORA', modelo: 'A1', numeroSerie: '7A339DC2I721129F', certificadora: 'CERTIFICA BRASIL', validade: '10/10/2010' }
  ]);
  const [dataCriacao, setDataCriacao] = useState('01/10/2025');
  const handleSave = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/empresas');
    }, 2000);
  };

  const customButtons = (
    <>
      <button className="action-btn cancel-btn" onClick={handleCancel}>
        <img src="https://www.figma.com/api/mcp/asset/5e62f61d-cb02-4fbc-a387-4369ea300fc9" alt="Cancelar" style={{ width: 16, height: 16, marginRight: 5 }} />
        <span>Cancelar</span>
      </button>
      <button className="action-btn save-btn" onClick={handleSave}>
        <img src="https://www.figma.com/api/mcp/asset/9242654e-b4c9-44a5-8981-f58865883f9f" alt="Salvar" style={{ width: 16, height: 16, marginRight: 5 }} />
        <span>Salvar</span>
      </button>
    </>
  );

  return (
    <div className="cadastrar-empresa">
      <Navbar />

      {showSuccessMessage && (
        <div className="success-message-overlay" style={{ background: '#b9f8cf', boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '15px 20px' }}>
          <img src="https://www.figma.com/api/mcp/asset/9037d4f6-f9e2-4bdf-91fa-11183f4ebaa8" alt="Sucesso" style={{ width: 17, height: 17 }} />
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: 12, color: '#016630' }}>Empresa cadastrada com sucesso!</span>
        </div>
      )}

      <div className="content-wrapper">
        <PageTitle 
          title="CADASTRAR EMPRESA" 
          color="#008236"
          buttons={customButtons}
        />

        <div className="form-container">
          <div className="form-row">
            <div className="input-wrapper" style={{ width: '118.75px' }}>
              <label>Código</label>
              <input type="text" className="disabled-input" defaultValue="96128" disabled />
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>CPF / CNPJ</label>
              <input type="text" defaultValue="11.882.936/0001-00" />
            </div>
            <div className="input-wrapper rg-ie-wrapper" style={{ flex: 1 }}>
              <label>RG / IE</label>
              <div className="rg-ie-field">
                <input type="text" defaultValue="1233215648-8" />
                <div className="isento-container">
                  <input type="checkbox" id="isento-rg" className="isento-checkbox" />
                  <label htmlFor="isento-rg" className="isento-label">Isento</label>
                </div>
              </div>
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Apelido</label>
              <input type="text" defaultValue="PALMAS TEC" />
            </div>
            <div className="input-wrapper" style={{ width: '247.5px' }}>
              <label>Contribuinte</label>
              <select>
                <option>1 - CONTRIBUINTE</option>
                <option>2 - NÃO CONTRIBUINTE</option>
              </select>
            </div>
            <div className="input-wrapper" style={{ width: '247.5px' }}>
              <label>Regime Tributário</label>
              <select>
                <option>SIMPLES NACIONAL</option>
                <option>LUCRO PRESUMIDO</option>
                <option>LUCRO REAL</option>
              </select>
            </div>
            <div className="input-wrapper" style={{ width: '110px' }}>
              <label>Status</label>
              <select>
                <option>INATIVO</option>
                <option>ATIVO</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Nome / Razão Social</label>
              <input type="text" defaultValue="PALMAS TEC DISTRIBUIDORA EIRELI - ME" />
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Nome Social / Nome Fantasia</label>
              <input type="text" defaultValue="PALMAS TEC DISTRIBUIDORA" />
            </div>
          </div>
        </div>

        <div className="inner-section">
          <div className="tabs-container">
            <button 
              className={`tab ${activeTab === 'endereco' ? 'active' : ''}`}
              onClick={() => setActiveTab('endereco')}
            >
              Endereço
            </button>
            <button 
              className={`tab ${activeTab === 'telefone' ? 'active' : ''}`}
              onClick={() => setActiveTab('telefone')}
            >
              Telefone
            </button>
            <button 
              className={`tab ${activeTab === 'email' ? 'active' : ''}`}
              onClick={() => setActiveTab('email')}
            >
              E-mail
            </button>
            <button 
              className={`tab ${activeTab === 'complemento' ? 'active' : ''}`}
              onClick={() => setActiveTab('complemento')}
            >
              Complemento
            </button>
            <button 
              className={`tab ${activeTab === 'fiscal' ? 'active' : ''}`}
              onClick={() => setActiveTab('fiscal')}
            >
              Fiscal
            </button>
            <button 
              className={`tab ${activeTab === 'certificado' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificado')}
            >
              Certificado
            </button>
            <button 
              className={`tab ${activeTab === 'logotipo' ? 'active' : ''}`}
              onClick={() => setActiveTab('logotipo')}
            >
              Logotipo
            </button>
            <button 
              className={`tab ${activeTab === 'fechamento' ? 'active' : ''}`}
              onClick={() => setActiveTab('fechamento')}
            >
              Fechamento
            </button>
          </div>

          {activeTab === 'endereco' && (
            <div className="tab-content">
              <div className="address-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ width: '114px' }}>
                    <label>CEP</label>
                    <input type="text" defaultValue="77.006-070" />
                  </div>
                  <div className="input-wrapper" style={{ width: '733px' }}>
                    <label>Endereço</label>
                    <input type="text" defaultValue="Quadra 106 norte, alameda 17" />
                  </div>
                  <div className="input-wrapper" style={{ width: '249px' }}>
                    <label>Bairro</label>
                    <input type="text" defaultValue="plano diretor norte" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Número</label>
                    <input type="text" defaultValue="09" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-wrapper" style={{ width: '423px' }}>
                    <label>Complemento</label>
                    <input type="text" defaultValue="atrás da jk, no fundo da lotérica" />
                  </div>
                  <div className="input-wrapper" style={{ width: '424px' }}>
                    <label>Cidade - UF</label>
                    <select>
                      <option>palmas - to</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Tipo</label>
                    <select>
                      <option>residencial</option>
                      <option>comercial</option>
                    </select>
                  </div>
                </div>

                <div className="add-btn-row">
                  <button className="add-btn">
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="address-table-wrapper">
                <table className="address-table">
                  <thead>
                    <tr>
                      <th style={{ width: '135px' }}>Tipo</th>
                      <th style={{ width: '96px' }}>CEP</th>
                      <th style={{ width: '261px' }}>Endereço</th>
                      <th style={{ width: '163px' }}>Bairro</th>
                      <th style={{ width: '89px' }}>Número</th>
                      <th style={{ flex: 1 }}>Complemento</th>
                      <th style={{ width: '158px' }}>Cidade - UF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Comercial</td>
                      <td>77021033</td>
                      <td>410 Sul, Alameda 12 Lt. 10 Qd.8</td>
                      <td>Plano Diretor Sul</td>
                      <td>1012</td>
                      <td>Ao lado do supermercado</td>
                      <td>Palmas - TO</td>
                    </tr>
                    <tr>
                      <td>Comercial</td>
                      <td>77021033</td>
                      <td>410 Sul, Alameda 12 Lt. 10 Qd.8</td>
                      <td>Plano Diretor Sul</td>
                      <td>1012</td>
                      <td>Ao lado do supermercado</td>
                      <td>Palmas - TO</td>
                    </tr>
                    <tr>
                      <td>Comercial</td>
                      <td>77021033</td>
                      <td>410 Sul, Alameda 12 Lt. 10 Qd.8</td>
                      <td>Plano Diretor Sul</td>
                      <td>1012</td>
                      <td>Ao lado do supermercado</td>
                      <td>Palmas - TO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'telefone' && (
            <div className="tab-content">
              <AbaTelefoneEmpresa telefones={telefones} setTelefones={setTelefones} />
            </div>
          )}

          {activeTab === 'email' && (
            <div className="tab-content">
              <AbaEmailEmpresa emails={emails} setEmails={setEmails} />
            </div>
          )}

          {activeTab === 'complemento' && (
            <div className="tab-content">
              <div className="complemento-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Vendedor</label>
                    <select>
                      <option>8 - JOÃO GUIMARÃES - 507.528.990-10</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Tabela de Preço</label>
                    <select>
                      <option>1 - VAREJO</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Grupo</label>
                    <select>
                      <option>1 - VAREJO - TO</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Prospectador</label>
                    <select>
                      <option>18 - CECÍLIA MEIRELES - 788.320.567-03</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Transportadora</label>
                    <select>
                      <option>151 - ATUAL CARGAS - 42.937.321/0004-15</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Rota</label>
                    <select>
                      <option>4 - BRASIL NORTE / NORDESTE</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-wrapper" style={{ width: '201.66px' }}>
                    <label>Cadastro</label>
                    <input type="text" defaultValue="01/10/2025" disabled className="disabled-input" />
                  </div>
                  <div className="input-wrapper input-with-calendar" style={{ width: '201.66px' }}>
                    <label>Nascimento / Criação</label>
                    <div className="input-calendar-container">
                      <input type="text" value={dataCriacao} onChange={(e) => setDataCriacao(e.target.value)} />
                      <button className="calendar-icon-btn" type="button">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10.6667 1.33333V4" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5.33333 1.33333V4" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 6.66667H14" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="input-wrapper" style={{ width: '201.66px' }}>
                    <label>Inscrição Municipal</label>
                    <input type="text" defaultValue="898496541894015" />
                  </div>
                  <div className="input-wrapper" style={{ width: '201.66px' }}>
                    <label>Inscrição Suframa</label>
                    <input type="text" defaultValue="123456789" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fiscal' && (
            <div className="tab-content">
              <p style={{ padding: '20px', color: '#666' }}>Conteúdo da aba Fiscal</p>
            </div>
          )}

          {activeTab === 'certificado' && (
            <div className="tab-content">
              <AbaCertificadoEmpresa certificados={certificados} setCertificados={setCertificados} />
            </div>
          )}

          {activeTab === 'logotipo' && (
            <div className="tab-content">
              <AbaLogotipoEmpresa />
            </div>
          )}

          {activeTab === 'fechamento' && (
            <div className="tab-content">
              <AbaFechamentoEmpresa />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CadastrarEmpresa;
