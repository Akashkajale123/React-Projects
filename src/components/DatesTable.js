import React from 'react';

function DatesTable(props) {
  const { daysOfWeek,selectedYear,selectedMonth } = props;
  
  function isSameDate(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
  

  const renderCalendar = () => {
    const totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();//
    const firstDay = new Date(selectedYear, selectedMonth, 1).getDay();//
    const today = new Date(); //  today's date

    const cells = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          row.push(<td key={`empty-${j}`} id={`cell${dayCounter}`}></td>);
        } else if (dayCounter <= totalDays) {
          const date = new Date(selectedYear, selectedMonth, dayCounter);
          const isToday = isSameDate(date, today);
          row.push(
            <td
              key={`date-${dayCounter}`}
              id={`cell${dayCounter}`}
              className={isToday ? 'today' : ''}
            >
              {dayCounter}
            </td>
          );
          dayCounter++;
        }
      }
      cells.push(<tr key={`row-${i}`}>{row}</tr>);
    }

    return cells;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day,index) => (
              <th key={`day-${index}`} style={{backgroundColor:'#3a4858',color:'#fff'}}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
            {renderCalendar()}
        </tbody>
      </table>
    </div>
  );
}

export default DatesTable;
