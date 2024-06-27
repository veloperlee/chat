import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Friend({ sideBar, setSideBar }) { // props를 객체 형태로 받습니다.
    // 친구목록
    let [friends, setFriends] = useState([]);

    // 친구목록
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
        <div>
            <Button className='btn' variant="secondary" onClick={() => setSideBar(!sideBar)}>
                {sideBar ? '닫기' : '친구목록'}
            </Button>{' '}
            {
                sideBar === true ? <FriendList friends={friends} /> : null
            }
        </div>
    );
}

function FriendList({ friends }) {
    return (
        <div className='friend'>
            <h2>친구목록</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend.id}>
                        {friend.title} ({friend.speed})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Friend;
