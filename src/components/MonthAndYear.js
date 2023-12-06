import React from 'react'

function MonthAndYear(props) {
    const {months,setSelectedMonth,selectedMonth,showYearInput, setShowYearInput, setSelectedYear,
        selectedYear}=props;

    const handleMonthChange=(e)=>{
        setSelectedMonth(parseInt(e.target.value, 10));

    }

    const handleYearDoubleClick=()=>{
        setShowYearInput(true)
    }

    const handleYearInputChange=(e)=>{
        setSelectedYear(parseInt(e.target.value,10))//
    }

    const handleYearInputBlur=()=>{
        setShowYearInput(false);
    }

    const handleYearInputKeyDown=(e)=>{
        if(e.key==='Enter'){
            setShowYearInput(false);
        }
    }


  return (
    <div>
      <select id="month" value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month,index)=>(
            <option  key={index} value={index}>{month}</option>
        ))}
      </select>
      {' '}
      {' '}
     
    
      {showYearInput ?(
        <input
          type='text'
          id='year-text-box'
          placeholder='Year'
          value={selectedYear}
          onChange={handleYearInputChange}
          onBlur={handleYearInputBlur}
          onKeyDown={handleYearInputKeyDown}
        />):
        <span id='year' onDoubleClick={handleYearDoubleClick}>
        {selectedYear}
      </span>
        }
    
    </div>
  )
}

export default MonthAndYear
