import React, { useState } from 'react';

function AbaFechamentoEmpresa() {
  const [filtros, setFiltros] = useState({
    documentos: 'TODOS',
    arquivos: 'XML e PDF',
    dataFechamento: '01'
  });

  const handleFiltroChange = (campo, valor) => {
    setFiltros({ ...filtros, [campo]: valor });
  };

  return (
    <div className="aba-fechamento-empresa">
      <div className="fechamento-filtros">
        <div className="filtro-group">
          <label>Documentos</label>
          <select 
            value={filtros.documentos}
            onChange={(e) => handleFiltroChange('documentos', e.target.value)}
          >
            <option>TODOS</option>
            <option>NF-E</option>
            <option>NFC-E</option>
            <option>NFS-E</option>
            <option>CT-E</option>
            <option>CT-F OS</option>
          </select>
        </div>

        <div className="filtro-group">
          <label>Arquivos</label>
          <select 
            value={filtros.arquivos}
            onChange={(e) => handleFiltroChange('arquivos', e.target.value)}
          >
            <option>XML E PDF</option>
            <option>XML</option>
            <option>PDF</option>
          </select>
        </div>

        <div className="filtro-group">
          <label>Data de Fechamento</label>
          <select 
            value={filtros.dataFechamento}
            onChange={(e) => handleFiltroChange('dataFechamento', e.target.value)}
          >
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
            <option>06</option>
            <option>07</option>
            <option>08</option>
            <option>09</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default AbaFechamentoEmpresa;
