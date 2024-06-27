import { useState, useEffect } from 'react';
import { Button, Container, Nav, Navbar, Row, Col, Form } from 'react-bootstrap';

function Chat({ sideBar, setSideBar }) {
    // 대화목록
    let [chats, setChats] = useState([]);

    // 대화목록
    useEffect(() => {
        fetch('/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setChats(data.chat))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Button className='btn' variant="secondary" onClick={() => setSideBar(!sideBar)}>
                {sideBar ? '닫기' : '대화목록'}
            </Button>{' '}
            {
                sideBar == true ? <ChatList chats={chats} /> : null
            }
        </div>
    )
}

function ChatList(props) {
    return (
        <div className='friend'>
            <h2>대화목록</h2>
            <table>
                {props.chats.map(function (chats, i) {
                    return (
                        <tr>
                            <td>{chats.title}</td>
                            <td>{chats.speed}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    )
}

export default Chat
