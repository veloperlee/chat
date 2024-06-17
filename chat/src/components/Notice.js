import { Button, Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Notice() {

  let navigate = useNavigate();

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>Chat</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/notice') }}>공지사항</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h2>공지사항</h2>
    </div>
  )
}

export default Notice
