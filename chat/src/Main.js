import logo from './logo.svg';
import './App.css';
import { Button, Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Friend from './components/Friend.js';
import Chat from './components/Chat.js';
import Notice from './components/Notice.js';

function Main() {

  // 친구목록
  // let [friends, setFriends] = useState([]);

  // 대화목록
  // let [chats, setChats] = useState([]);

  // 메뉴이동 네비게이터
  let navigate = useNavigate();

  // sideBar useState
  let [sideBar, setSideBar] = useState(false);

  // 친구목록
  // useEffect(() => {
  //   fetch('/data.json')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setFriends(data.friend))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // 대화목록
  // useEffect(() => {
  //   fetch('/data.json')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setChats(data.chat))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (

    <div className="App">

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
      <main>
        <div className='sideBar'>
          {/* <Button className='btn' variant="secondary" onClick={() => setSideBar(!sideBar)}>
            {sideBar ? '닫기' : '친구목록'}
          </Button>{' '}
          {
            sideBar == true ? <FriendList friends={friends} /> : null
          } */}
          <Friend sideBar={sideBar} setSideBar={setSideBar} />


          {/* <Button className='btn' variant="secondary" onClick={() => setSideBar(!sideBar)}>
            {sideBar ? '닫기' : '대화목록'}
          </Button>{' '}
          {
            sideBar == true ? <ChatList chats={chats} /> : null
          } */}
          <Chat sideBar={sideBar} setSideBar={setSideBar} />

        </div>

        <div className='chat'>
          <div className='chat_list'>
            <div className='user1'>
              <ul>
                <li>밥먹었수산시장?</li>
                <li>배고픈데</li>
              </ul>
            </div>
            <div className='user2'>
              <ul>
                <li>아직 안먹었음</li>
                <li>너는?</li>
              </ul>
            </div>
            <div className='user1'>
              <ul>
                <li>뭐 먹을거임?</li>
              </ul>
            </div>

          </div>

          <Form className='form'>
            <Form.Group className="chat_layout" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="text" className="chat_input" placeholder="채팅을 입력하세요." />
            </Form.Group>
            <Button variant="secondary" type="submit">전송</Button>{' '}
          </Form>
        </div>
      </main>
    </div>
  );
}

// Friend
// function FriendList(props) {
//   return (
//     <div className='friend'>
//       <h2>친구목록</h2>
//       <ul>
//         {props.friends.map(function (friend, i) {
//           return (
//             <li key={friend.id}>
//               {friend.title} ({friend.speed})
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   )
// }

// Chat 
// function ChatList(props) {
//   return (
//     <div className='friend'>
//       <h2>대화목록</h2>
//       <table>
//         {props.chats.map(function (chats, i) {
//           return (
//             <tr>
//               <td>{chats.title}</td>
//               <td>{chats.speed}</td>
//             </tr>
//           );
//         })}
//       </table>
//     </div>
//   )
// }

export default Main;
