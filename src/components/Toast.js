import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
          <circle cx="8.5" cy="8.5" r="7.3" stroke="#016630" strokeWidth="1.4"/>
          <path d="M5.5 8.5L7.5 10.5L11.5 6.5" stroke="#016630" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Toast;
