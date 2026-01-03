import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastral.css';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import TransportadorasFilters from './TransportadorasFilters';
import TransportadorasTable from './TransportadorasTable';

const Transportadoras = () => {
  const navigate = useNavigate();

  const handleInclude = () => {
    navigate('/cadastrar-transportadora');
  };

  const handlePrint = () => {
    window.print();
  };

  const buttons = (
    <>
      <button className="action-btn include-btn" onClick={handleInclude}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="#008236" strokeWidth="1.5" />
          <path d="M10 6.5V13.5M6.5 10H13.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span>Incluir</span>
      </button>
      <button className="action-btn print-btn" onClick={handlePrint}>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M5 6.5V2.5H15V6.5M5 14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12V8C2 7.46957 2.21071 6.96086 2.58579 6.58579C2.96086 6.21071 3.46957 6 4 6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V12C18 12.5304 17.7893 13.0391 17.4142 13.4142C17.0391 13.7893 16.5304 14 16 14H15M5 11H15V17.5H5V11Z" stroke="#008236" strokeWidth="1.5" />
        </svg>
        <span>Imprimir</span>
      </button>
    </>
  );

  return (
    <div className="cadastral">
      <div className="background-overlay" />
      <Navbar />
      <div className="content-wrapper">
        <PageTitle title="TRANSPORTADORAS" buttons={buttons} />
        <TransportadorasFilters />
        <TransportadorasTable />
      </div>
    </div>
  );
};

export default Transportadoras;
