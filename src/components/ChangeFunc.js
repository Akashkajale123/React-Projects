import React from 'react'

function ChangeFunc(props) {
   const{selectedYear,selectedMonth,setSelectedMonth,setSelectedYear} =props;
    const handlePrevYear = () => {
        setSelectedYear(selectedYear - 1);
      };
    
      const handleNextYear = () => {
        setSelectedYear(selectedYear + 1);
      };
    
      const handlePrevMonth = () => {
        setSelectedMonth((selectedMonth - 1 + 12) % 12);
      };
    
      const handleNextMonth = () => {
        setSelectedMonth((selectedMonth + 1) % 12);
      };
  return (
    <div>
        <button id='previous-year' onClick={handlePrevYear}> &lt;&lt;</button>
        <button id='previous-month' onClick={handlePrevMonth}> &lt;</button>
        <button id='next-month' onClick={handleNextMonth}>&gt;</button>
        <button id='next-year' onClick={handleNextYear}> &gt;&gt;</button>
    </div>
  )
}

export default ChangeFunc
