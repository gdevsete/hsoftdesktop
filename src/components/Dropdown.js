import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ value, onChange, options, placeholder, type = 'simple' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderSimpleOption = (option) => (
    <div
      key={option.value}
      className="dropdown-option"
      onClick={() => handleSelect(option)}
    >
      {option.label}
    </div>
  );

  const renderSuperOption = (option) => (
    <div
      key={option.value}
      className="dropdown-option super-option"
      onClick={() => handleSelect(option)}
    >
      <div className="super-option-top">
        <span className="super-option-id">{option.id}</span>
        <span className="super-option-separator">-</span>
        <span className="super-option-name">{option.name}</span>
      </div>
      <div className="super-option-bottom">
        <span className="super-option-subtitle">{option.subtitle}</span>
        <span className="super-option-code">{option.code}</span>
      </div>
    </div>
  );

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <div 
        className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown-value">{value || placeholder}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="dropdown-arrow">
          <path 
            d="M5 7.5L10 12.5L15 7.5" 
            stroke="#008236" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map(option => 
            type === 'super' ? renderSuperOption(option) : renderSimpleOption(option)
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
