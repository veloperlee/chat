import { Button, Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Header from '../component/Header.js';
import React, { useState, useEffect } from 'react';

function Notice() {

  let navigate = useNavigate();

  let [notice, setNotice] = useState([]);

  useEffect(() => {
    fetch('/board.json')
      .then(response => response.json())
      .then(data => {
        console.log(data); // 데이터 확인
        setNotice(data.board); // board 배열을 notice 상태에 설정
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const board = notice.filter(item => item.notice === 0);
  const boardNotice = notice.filter(item => item.notice === 1);

  return (
    <div>
      <Header />

      <h2>공지사항</h2>
      {/* <ul>
        {boardNotice.map(item => (
          <li key={item.id}>{item.id}{item.title}{item.board}</li>
        ))}
      </ul> */}

      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>날짜</th>
        </tr>
        {boardNotice.map(item => (
          <tr key={item.id}>
            {/* <td>{item.id}</td> */}
            <td>공지</td>
            <td>{item.title}</td>
            <td>{item.board}</td>
            <td>{item.date}</td>
          </tr>
        ))}
        {board.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.board}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Notice
