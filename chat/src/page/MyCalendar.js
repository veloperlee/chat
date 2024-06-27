import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Header from '../component/Header.js';
import { Button } from 'react-bootstrap';

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  };


  return (
    <div>
      <Header />
      <div className='calendar_wrap'>
        <Calendar
          onChange={onChange}
          value={date}
        // locale="en-US"
        />
        <div className="todo">
          <p>선택한 날짜: {date.toDateString()}</p>
          <div class="list">
            <input type='text' placeholder='할 일을 입력해주세요'/>
              <Button className='btn' variant="secondary">✔</Button>
          </div>
          <ul className="inner">
            <li>각 선택한 날짜에</li>
            <li>맞춰서 생성된 리스트</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default MyCalendar;
