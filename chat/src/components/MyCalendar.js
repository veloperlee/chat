import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  };

  
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
        // locale="en-US"
      />
      <p>선택한 날짜: {date.toDateString()}</p>
    </div>
  );
}

export default MyCalendar;
