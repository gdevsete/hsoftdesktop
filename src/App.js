import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cadastral from './components/Cadastral';
import CadastrarCliente from './components/CadastrarCliente';
import ListarEmpresas from './components/ListarEmpresas';
import CadastrarEmpresa from './components/CadastrarEmpresa';
import CadastrarFornecedor from './components/CadastrarFornecedor';
import CadastrarFornecedorForm from './components/CadastrarFornecedorForm';
import Transportadoras from './components/Transportadoras';
import CadastrarTransportadoraForm from './components/CadastrarTransportadoraForm';
import Usuarios from './components/Usuarios';
import CadastrarUsuarioForm from './components/CadastrarUsuarioForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cadastral />} />
          <Route path="/clientes" element={<Cadastral />} />
          <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
          <Route path="/empresas" element={<ListarEmpresas />} />
          <Route path="/cadastrar-empresa" element={<CadastrarEmpresa />} />
          <Route path="/fornecedores" element={<CadastrarFornecedor />} />
          <Route path="/cadastrar-fornecedor" element={<CadastrarFornecedorForm />} />
          <Route path="/transportadoras" element={<Transportadoras />} />
          <Route path="/cadastrar-transportadora" element={<CadastrarTransportadoraForm />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cadastrar-usuario" element={<CadastrarUsuarioForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
