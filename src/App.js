import React, { useState } from 'react';
import './App.css';
import MonthAndYear from './components/MonthAndYear';
import DatesTable from './components/DatesTable';
import ChangeFunc from './components/ChangeFunc';

function App() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [showYearInput, setShowYearInput] = useState(false);

  return (
    <div id='main'>
      <h1 id='heading'>Calendar</h1>
      <MonthAndYear
        months={months}
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
        showYearInput={showYearInput}
        setShowYearInput={setShowYearInput}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <br />
      <br />
      <DatesTable daysOfWeek={daysOfWeek} selectedYear={selectedYear} selectedMonth={selectedMonth} />
      <br />
      <ChangeFunc
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        setSelectedYear={setSelectedYear}
      />
    </div>
  );
}

export default App;
