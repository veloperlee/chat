import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  let [friends, setFriends] = useState([]);
  let navigate = useNavigate();

  // sideBar useState
  let [sideBar , setSideBar] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFriends(data.friend))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (

    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/') }}>NTR</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link> */}
            {/* <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link> */}
            {/* <Link to="/friend" className="nav-link">friend</Link> */}
          </Nav>
        </Container>
      </Navbar>
      <main>
        <div className='sideBar'>
        <Button variant="secondary" onClick={ () => setSideBar(!sideBar) }>
        { sideBar ? '닫기' : '열기'}  
        </Button>{' '}
        {/* <button onClick={ () => setSideBar(!sideBar) }>
          { sideBar ? '닫기' : '열기'}
        </button> */}
          {/* <button>사이드바</button> */}
          {
            sideBar == true ? <FriendList friends={friends}/> : null
          }
        </div>
        {/* 친구목록 */}
        {/* <FriendList friends={friends} /> */}
      </main>
    </div>
  );
}

{/* Friend */ }
function FriendList(props) {
  return (
    <div className='friend'>
      <h2>친구목록</h2>
      <ul>
        {props.friends.map(function (friend, i) {
          return (
            <li key={friend.id}>
              {friend.title} ({friend.speed})
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default App;
