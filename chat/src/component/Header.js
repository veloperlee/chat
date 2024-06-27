import { Button, Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Header() {
     // 메뉴이동 네비게이터
  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Chat</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/notice') }}>공지사항</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Calendar') }}>일정</Nav.Link>
            {/* <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link> */}
            {/* <Link to="/friend" className="nav-link">friend</Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
