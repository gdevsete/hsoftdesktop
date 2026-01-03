import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import DatePicker from './DatePicker';
import './CadastrarCliente.css';

function CadastrarCliente() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('endereco');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [birthDate, setBirthDate] = useState('10/10/2010');

  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = () => {
    // TODO: implementar lógica de salvar
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate('/');
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
    <div className="cadastrar-cliente">
      <Navbar />
      {showSuccessMessage && (
        <div className="success-message-overlay">
          <div className="success-message">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path d="M8.5 1.5C4.63401 1.5 1.5 4.63401 1.5 8.5C1.5 12.366 4.63401 15.5 8.5 15.5C12.366 15.5 15.5 12.366 15.5 8.5C15.5 4.63401 12.366 1.5 8.5 1.5ZM11.7803 6.78033L8.03033 10.5303C7.88968 10.671 7.69891 10.75 7.5 10.75C7.30109 10.75 7.11032 10.671 6.96967 10.5303L5.21967 8.78033C5.07902 8.63968 5 8.44891 5 8.25C5 7.83579 5.33579 7.5 5.75 7.5C5.94891 7.5 6.13968 7.57902 6.28033 7.71967L7.5 8.93934L10.7197 5.71967C10.8603 5.57902 11.0511 5.5 11.25 5.5C11.6642 5.5 12 5.83579 12 6.25C12 6.44891 11.921 6.63968 11.7803 6.78033Z" fill="#016630"/>
            </svg>
            <p>Cliente cadastrado com sucesso!</p>
          </div>
        </div>
      )}
      <div className="content-wrapper">
        <PageTitle title="CADASTRAR CLIENTE" buttons={customButtons} />

        <div className="form-container">
          <div className="form-row">
            <div className="input-wrapper" style={{ width: '201.667px' }}>
              <label>Código</label>
              <input type="text" defaultValue="96128" disabled className="disabled-input" />
            </div>
            <div className="input-wrapper" style={{ width: '201.667px' }}>
              <label>CPF / CNPJ</label>
              <input type="text" defaultValue="11.882.936/0001-00" />
            </div>
            <div className="input-wrapper input-with-isento" style={{ width: '201.667px' }}>
              <label>RG / IE</label>
              <div className="input-container-isento">
                <input type="text" defaultValue="1233215648-8" />
                <label className="isento-label">
                  <input type="checkbox" className="isento-checkbox" />
                  <span>Isento</span>
                </label>
              </div>
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Contribuinte</label>
              <select>
                <option>1 - CONTRIBUINTE</option>
                <option>2 - ISENTO</option>
                <option>9 - NÃO CONTRIBUINTE</option>
              </select>
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Regime Tributário</label>
              <select>
                <option>2 - SIMPLES NACIONAL</option>
                <option>LUCRO PRESUMIDO</option>
                <option>LUCRO REAL</option>
                <option>MEI</option>
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
              <input type="text" defaultValue="ALL NOTE - ASSISTENCIA TECNICA ESPECIALIZADA EIRELI" />
            </div>
            <div className="input-wrapper" style={{ flex: 1 }}>
              <label>Nome Social / Nome Fantasia</label>
              <input type="text" defaultValue="ALL NOTE ASSISTENCIA" />
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
              className={`tab ${activeTab === 'financeiro' ? 'active' : ''}`}
              onClick={() => setActiveTab('financeiro')}
            >
              Financeiro
            </button>
            <button 
              className={`tab ${activeTab === 'anexos' ? 'active' : ''}`}
              onClick={() => setActiveTab('anexos')}
            >
              Anexos
            </button>
          </div>

          {activeTab === 'endereco' && (
            <div className="tab-content">
              <div className="address-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ width: '117px' }}>
                    <label>CEP</label>
                    <input type="text" defaultValue="77006-070" />
                  </div>
                  <div className="input-wrapper" style={{ width: '755.5px' }}>
                    <label>Endereço</label>
                    <input type="text" defaultValue="QUADRA 106 NORTE, ALAMEDA 17" />
                  </div>
                  <div className="input-wrapper" style={{ width: '249px' }}>
                    <label>Bairro</label>
                    <input type="text" defaultValue="PLANO DIRETOR NORTE" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Número</label>
                    <input type="text" defaultValue="09" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Complemento</label>
                    <input type="text" defaultValue="ATRÁS DA JK, NO FUNDO DA LOTÉRICA" />
                  </div>
                  <div className="input-wrapper" style={{ width: '436.5px' }}>
                    <label>Cidade - UF</label>
                    <select>
                      <option>PALMAS - TO</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ width: '367.5px' }}>
                    <label>Tipo</label>
                    <select>
                      <option>1 - COMERCIAL</option>
                    </select>
                  </div>
                </div>

                <div className="add-btn-row">
                  <button className="add-btn">
                    Adicionar
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 5V15M5 10H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="address-table-wrapper">
                <table className="address-table">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>CEP</th>
                      <th>Endereço</th>
                      <th>Bairro</th>
                      <th>Número</th>
                      <th>Complemento</th>
                      <th>Cidade - UF</th>
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
              <div className="telefone-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Telefone</label>
                    <input type="text" placeholder="(63) 98765-4321" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Ramal</label>
                    <input type="text" placeholder="06" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Tipo</label>
                    <input type="text" placeholder="WHATSAPP" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Departamento</label>
                    <input type="text" placeholder="FINANCEIRO" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Contato</label>
                    <input type="text" placeholder="JOÃO MARIA PEREIRA SILVA" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Observação</label>
                    <input type="text" placeholder="LINHA DESATIVADA" />
                  </div>
                </div>

                <div className="add-btn-row">
                  <button className="add-btn">
                    Adicionar
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 5V15M5 10H15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="telefone-table-wrapper">
                <table className="telefone-table">
                  <thead>
                    <tr>
                      <th style={{ width: '152px' }}>Telefone</th>
                      <th style={{ width: '93px' }}>Ramal</th>
                      <th style={{ width: '173px' }}>Tipo</th>
                      <th style={{ width: '219px' }}>Departamento</th>
                      <th style={{ width: '219px' }}>Contato</th>
                      <th style={{ flex: 1 }}>Observação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>(11) 98877-6655</td>
                      <td>06</td>
                      <td>Whatsapp</td>
                      <td>Financeiro</td>
                      <td>João Maria Pereira Silva</td>
                      <td>Linha desativada momentaneamente</td>
                    </tr>
                    <tr>
                      <td>(11) 98877-6655</td>
                      <td>06</td>
                      <td>Whatsapp</td>
                      <td>Financeiro</td>
                      <td>João Maria Pereira Silva</td>
                      <td>Linha desativada momentaneamente</td>
                    </tr>
                    <tr>
                      <td>(11) 98877-6655</td>
                      <td>06</td>
                      <td>Whatsapp</td>
                      <td>Financeiro</td>
                      <td>João Maria Pereira Silva</td>
                      <td>Linha desativada momentaneamente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'email' && (
            <div className="tab-content">
              <div className="email-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>E-mail</label>
                    <input type="email" className="email-input" placeholder="palmastec@palmastec.com" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Descrição</label>
                    <input type="text" placeholder="E-MAIL PRINCIPAL" />
                  </div>
                </div>

                <div className="checkbox-envio-row">
                  <label className="checkbox-label">
                    <input type="checkbox" className="email-checkbox" />
                    <span>Todos</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="email-checkbox" />
                    <span>Nota</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="email-checkbox" />
                    <span>Boleto</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="email-checkbox" />
                    <span>Venda</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="email-checkbox" />
                    <span>Orçamento</span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="email-checkbox" />
                    <span>Ordem de Serviço</span>
                  </label>
                </div>

                <div className="add-btn-row">
                  <button className="add-btn">
                    Adicionar
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 3V17M3 10H17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="email-table-wrapper">
                <table className="email-table">
                  <thead>
                    <tr>
                      <th style={{ width: '327px' }}>Email</th>
                      <th style={{ width: '381px' }}>Descrição</th>
                      <th style={{ flex: 1 }}>Nota</th>
                      <th style={{ flex: 1 }}>Boleto</th>
                      <th style={{ flex: 1 }}>Venda</th>
                      <th style={{ flex: 1 }}>Orçamento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>palmastec@palmastec.com</td>
                      <td>Email principal do setor administrativo</td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M13.75 6.25L6.25 13.75M6.25 6.25L13.75 13.75" stroke="#C10007" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>palmastec@palmastec.com</td>
                      <td>Email principal do setor administrativo</td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>palmastec@palmastec.com</td>
                      <td>Email principal do setor administrativo</td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>palmastec@palmastec.com</td>
                      <td>Email principal do setor administrativo</td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M13.75 6.25L6.25 13.75M6.25 6.25L13.75 13.75" stroke="#C10007" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M13.75 6.25L6.25 13.75M6.25 6.25L13.75 13.75" stroke="#C10007" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                      <td className="check-cell">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M16.25 5.625L7.5 14.375L3.75 10.625" stroke="#008236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                      <input type="text" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                      <button className="calendar-icon-btn" onClick={() => setShowDatePicker(true)}>
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

          {activeTab === 'financeiro' && (
            <div className="tab-content">
              <div className="financeiro-form">
                <div className="form-row">
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Liberar Vendas a Prazo</label>
                    <select>
                      <option>SIM</option>
                      <option>NÃO</option>
                    </select>
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Dias Vencidos para Bloqueio</label>
                    <input type="text" defaultValue="30" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Crédito Liberado</label>
                    <input type="text" defaultValue="10.000,00" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Crédito Disponível</label>
                    <input type="text" defaultValue="8.650,00" />
                  </div>
                  <div className="input-wrapper" style={{ flex: 1 }}>
                    <label>Média de Atraso</label>
                    <input type="text" defaultValue="0" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'anexos' && (
            <div className="tab-content">
              <div className="table-container">
                {/* Header da tabela */}
                <div className="table-header anexos">
                  <div className="table-header-cell nome anexos-header-nome">Nome</div>
                  <div className="table-header-cell tipo">Tipo</div>
                  <div className="table-header-cell tamanho">Tamanho</div>
                </div>

                {/* Linhas da tabela */}
                <div className="table-body">
                  {/* Linha "Adicionar Arquivos" */}
                  <div className="table-row anexos add-row">
                    <div className="table-cell nome anexos-nome-cell">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 4.5V13.5M4.5 9H13.5" stroke="#737373" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span>ADICIONAR ARQUIVOS</span>
                    </div>
                    <div className="table-cell tipo"></div>
                    <div className="table-cell tamanho"></div>
                  </div>

                  {/* Exemplos de arquivos anexados */}
                  <div className="table-row anexos">
                    <div className="table-cell nome anexos-nome-cell">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M10.5 1.5H4.5C3.9 1.5 3.45 1.95 3.45 2.55L3 15.45C3 16.05 3.45 16.5 4.05 16.5H13.5C14.1 16.5 14.55 16.05 14.55 15.45V6L10.5 1.5Z" fill="#E53935"/>
                        <path d="M10.5 6V1.5L14.55 6H10.5Z" fill="white"/>
                        <path d="M5.25 10.5H12.75M5.25 12.75H9.75" stroke="white" strokeWidth="0.75"/>
                      </svg>
                      <span>FICHA TÉCNICA MR60X V4.1.3</span>
                    </div>
                    <div className="table-cell tipo">PDF</div>
                    <div className="table-cell tamanho">527 KB</div>
                  </div>

                  <div className="table-row anexos">
                    <div className="table-cell nome anexos-nome-cell">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M10.5 1.5H4.5C3.9 1.5 3.45 1.95 3.45 2.55L3 15.45C3 16.05 3.45 16.5 4.05 16.5H13.5C14.1 16.5 14.55 16.05 14.55 15.45V6L10.5 1.5Z" fill="#E53935"/>
                        <path d="M10.5 6V1.5L14.55 6H10.5Z" fill="white"/>
                        <path d="M5.25 10.5H12.75M5.25 12.75H9.75" stroke="white" strokeWidth="0.75"/>
                      </svg>
                      <span>FICHA TÉCNICA MR60X V4.1.3</span>
                    </div>
                    <div className="table-cell tipo">PDF</div>
                    <div className="table-cell tamanho">527 KB</div>
                  </div>

                  <div className="table-row anexos">
                    <div className="table-cell nome anexos-nome-cell">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M10.5 1.5H4.5C3.9 1.5 3.45 1.95 3.45 2.55L3 15.45C3 16.05 3.45 16.5 4.05 16.5H13.5C14.1 16.5 14.55 16.05 14.55 15.45V6L10.5 1.5Z" fill="#5C6BC0"/>
                        <path d="M10.5 6V1.5L14.55 6H10.5Z" fill="#CCCCCC"/>
                        <path d="M6.75 12L8.25 9.75L9.75 11.25L11.25 9L13.5 12H6.75Z" fill="#CCCCCC"/>
                      </svg>
                      <span>FICHA TÉCNICA MR60X V4.1.3</span>
                    </div>
                    <div className="table-cell tipo">PDF</div>
                    <div className="table-cell tamanho">527 KB</div>
                  </div>

                  <div className="table-row anexos">
                    <div className="table-cell nome anexos-nome-cell">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M10.5 1.5H4.5C3.9 1.5 3.45 1.95 3.45 2.55L3 15.45C3 16.05 3.45 16.5 4.05 16.5H13.5C14.1 16.5 14.55 16.05 14.55 15.45V6L10.5 1.5Z" fill="#757575"/>
                        <path d="M10.5 6V1.5L14.55 6H10.5Z" fill="#CCCCCC"/>
                        <path d="M6 11L7.5 9.75L9 10.5L10.5 9L12 11" stroke="#CCCCCC" strokeWidth="0.75" fill="none"/>
                      </svg>
                      <span>FICHA TÉCNICA MR60X V4.1.3</span>
                    </div>
                    <div className="table-cell tipo">PDF</div>
                    <div className="table-cell tamanho">527 KB</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showDatePicker && (
        <DatePicker
          onClose={() => setShowDatePicker(false)}
          onSelect={(date) => setBirthDate(date)}
          initialDate={birthDate}
        />
      )}
    </div>
  );
}

export default CadastrarCliente;
