import React, { useState } from 'react';
import mediaItem1 from '../icons/media-item-1.svg';
import mediaItem2 from '../icons/media-item-2.svg';
import mediaItem3 from '../icons/media-item-3.svg';

function AbaLogotipoEmpresa() {
  const [logotipos, setLogotipos] = useState({
    fiscal: mediaItem1,
    comercial: mediaItem2,
    telaPrincipal: mediaItem3,
    email: null
  });

  const handleFileSelect = (tipo) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setLogotipos({ ...logotipos, [tipo]: event.target.result });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="aba-logotipo-empresa">
      <div className="logotipo-cards-container">
        <div className="logotipo-card">
          <p className="logotipo-card-label">Fiscal (200 x 150px)</p>
          <div 
            className="logotipo-card-preview" 
            onClick={() => handleFileSelect('fiscal')}
            style={{ cursor: 'pointer' }}
          >
            {logotipos.fiscal ? (
              <img src={logotipos.fiscal} alt="Fiscal" className="logotipo-preview-img" />
            ) : (
              <div className="logotipo-add-icon">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <path d="M23 10.84V35.16M10.84 23H35.16" stroke="#008236" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="logotipo-card">
          <p className="logotipo-card-label">Comercial (200 x 150px)</p>
          <div 
            className="logotipo-card-preview" 
            onClick={() => handleFileSelect('comercial')}
            style={{ cursor: 'pointer' }}
          >
            {logotipos.comercial ? (
              <img src={logotipos.comercial} alt="Comercial" className="logotipo-preview-img" />
            ) : (
              <div className="logotipo-add-icon">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <path d="M23 10.84V35.16M10.84 23H35.16" stroke="#008236" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="logotipo-card">
          <p className="logotipo-card-label">Tela Principal (1280 x 700px)</p>
          <div 
            className="logotipo-card-preview" 
            onClick={() => handleFileSelect('telaPrincipal')}
            style={{ cursor: 'pointer' }}
          >
            {logotipos.telaPrincipal ? (
              <img src={logotipos.telaPrincipal} alt="Tela Principal" className="logotipo-preview-img" />
            ) : (
              <div className="logotipo-add-icon">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <path d="M23 10.84V35.16M10.84 23H35.16" stroke="#008236" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="logotipo-card">
          <p className="logotipo-card-label">E-mail (400 x 250px)</p>
          <div 
            className="logotipo-card-preview" 
            onClick={() => handleFileSelect('email')}
            style={{ cursor: 'pointer' }}
          >
            {logotipos.email ? (
              <img src={logotipos.email} alt="E-mail" className="logotipo-preview-img" />
            ) : (
              <div className="logotipo-add-icon">
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
                  <path d="M23 10.84V35.16M10.84 23H35.16" stroke="#008236" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbaLogotipoEmpresa;
