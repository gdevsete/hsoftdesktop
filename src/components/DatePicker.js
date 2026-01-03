import React, { useState } from 'react';
import './DatePicker.css';

function DatePicker({ onClose, onSelect, initialDate }) {
  const [currentMonth1, setCurrentMonth1] = useState(7); // Agosto (0-indexed)
  const [currentYear1, setCurrentYear1] = useState(2025);
  const [currentMonth2, setCurrentMonth2] = useState(8); // Setembro
  const [currentYear2, setCurrentYear2] = useState(2025);
  const [startDate, setStartDate] = useState('10/08/2025');
  const [endDate, setEndDate] = useState('20/09/2025');

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const daysInPrevMonth = getDaysInMonth(month - 1, year);
    
    const calendar = [];
    
    // Dias do mês anterior
    for (let i = firstDay - 1; i >= 0; i--) {
      calendar.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
    }
    
    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push({ day: i, isCurrentMonth: true });
    }
    
    // Dias do próximo mês
    const remainingDays = 42 - calendar.length;
    for (let i = 1; i <= remainingDays; i++) {
      calendar.push({ day: i, isCurrentMonth: false });
    }
    
    return calendar;
  };

  const handlePrevMonth1 = () => {
    if (currentMonth1 === 0) {
      setCurrentMonth1(11);
      setCurrentYear1(currentYear1 - 1);
    } else {
      setCurrentMonth1(currentMonth1 - 1);
    }
  };

  const handleNextMonth1 = () => {
    if (currentMonth1 === 11) {
      setCurrentMonth1(0);
      setCurrentYear1(currentYear1 + 1);
    } else {
      setCurrentMonth1(currentMonth1 + 1);
    }
  };

  const handlePrevMonth2 = () => {
    if (currentMonth2 === 0) {
      setCurrentMonth2(11);
      setCurrentYear2(currentYear2 - 1);
    } else {
      setCurrentMonth2(currentMonth2 - 1);
    }
  };

  const handleNextMonth2 = () => {
    if (currentMonth2 === 11) {
      setCurrentMonth2(0);
      setCurrentYear2(currentYear2 + 1);
    } else {
      setCurrentMonth2(currentMonth2 + 1);
    }
  };

  const handleOk = () => {
    if (onSelect) {
      onSelect(startDate);
    }
    onClose();
  };

  const quickOptions = [
    'Ontem',
    'Esta semana',
    'Semana anterior',
    'Este mês',
    'Mês anterior',
    'Últimos 30 dias',
    'Últimos 90 dias',
    'Últimos 180 dias'
  ];

  return (
    <div className="datepicker-overlay" onClick={onClose}>
      <div className="datepicker-container" onClick={(e) => e.stopPropagation()}>
        <div className="datepicker-main">
          <div className="datepicker-sidebar">
            <div className="datepicker-quick-option datepicker-select-item">
              Select Item
            </div>
            {quickOptions.map((option, index) => (
              <div key={index} className="datepicker-quick-option">
                {option}
              </div>
            ))}
          </div>

          <div className="datepicker-calendars">
          <div className="datepicker-calendar">
            <div className="datepicker-header">
              <button className="datepicker-nav-btn" onClick={handlePrevMonth1}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 2.5L4 6L7.5 9.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="datepicker-month">{monthNames[currentMonth1]}</span>
              <span className="datepicker-year">{currentYear1}</span>
              <button className="datepicker-nav-btn" onClick={handleNextMonth1}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="datepicker-weekdays">
              {weekDays.map((day, index) => (
                <div key={index} className="datepicker-weekday">{day}</div>
              ))}
            </div>

            <div className="datepicker-days">
              {generateCalendar(currentMonth1, currentYear1).map((dateObj, index) => (
                <button
                  key={index}
                  className={`datepicker-day ${!dateObj.isCurrentMonth ? 'other-month' : ''}`}
                >
                  {dateObj.day}
                </button>
              ))}
            </div>
          </div>

          <div className="datepicker-calendar">
            <div className="datepicker-header">
              <button className="datepicker-nav-btn" onClick={handlePrevMonth2}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M7.5 2.5L4 6L7.5 9.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <span className="datepicker-month">{monthNames[currentMonth2]}</span>
              <span className="datepicker-year">{currentYear2}</span>
              <button className="datepicker-nav-btn" onClick={handleNextMonth2}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4.5 2.5L8 6L4.5 9.5" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="datepicker-weekdays">
              {weekDays.map((day, index) => (
                <div key={index} className="datepicker-weekday">{day}</div>
              ))}
            </div>

            <div className="datepicker-days">
              {generateCalendar(currentMonth2, currentYear2).map((dateObj, index) => (
                <button
                  key={index}
                  className={`datepicker-day ${!dateObj.isCurrentMonth ? 'other-month' : ''}`}
                >
                  {dateObj.day}
                </button>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="datepicker-footer">
          <div className="datepicker-inputs">
            <input
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="datepicker-input"
            />
            <span className="datepicker-separator">-</span>
            <input
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="datepicker-input"
            />
          </div>
          <div className="datepicker-actions">
            <button className="datepicker-btn datepicker-btn-cancel" onClick={onClose}>
              Fechar
            </button>
            <button className="datepicker-btn datepicker-btn-ok" onClick={handleOk}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
