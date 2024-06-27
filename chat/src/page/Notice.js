import { Button, Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Header from '../component/Header.js';

function Notice() {

  let navigate = useNavigate();

  return (
    <div>
      <Header />

      <h2>공지사항</h2>
    </div>
  )
}

export default Notice
