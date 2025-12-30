import React from 'react';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import FormContainer from './FormContainer';
import TableContainer from './TableContainer';
import './Cadastral.css';

const Cadastral = () => {
  return (
    <div className="cadastral">
      <div className="background-overlay" />
      
      <Navbar />
      
      <div className="content-wrapper">
        <PageTitle />
        <FormContainer />
        <TableContainer />
      </div>
    </div>
  );
};

export default Cadastral;
