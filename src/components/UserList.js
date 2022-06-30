import React, { useEffect } from 'react';
import './UserStyle.css';
const User = ({user, onDelete, onToggle}) => {
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return ()=>{
            console.log('컴포넌트가 화면에서 사라짐');
        }
    },[])
    return (
        <div>
            <span className={user.active ? 'active' : ""} onClick={()=>{onToggle(user.id)}}> {/* = user.active ? 'active' : ""*/}
            유저네임 : {user.username}
            이메일 : {user.email} 
            </span>
            <button onClick={()=>{
                onDelete(user.id);
            }}>삭제</button>
        </div>
    )
}

const UserList = ({users, onDelete, onToggle}) => {
    // const users = [
    //     {
    //         id: 1,
    //         username: 'green',
    //         email: 'green@gmail.com',
    //     },
    //     {
    //         id: 2,
    //         username: 'blue',
    //         email: 'blue@gmail.com',
    //     },
    //     {
    //         id: 3,
    //         username: 'yellow',
    //         email: 'yellow@gmail.com',
    //     }
    // ]
    return (
        // <div>
        //     <div>
        //         유저네임 : {users[0].username}
        //         <span>이메일 : {users[0].email}</span>
        //     </div>
        //     <div>
        //         유저네임 : {users[1].username}
        //         <span>이메일 : {users[1].email}</span>
        //     </div>
        //     <div>
        //         유저네임 : {users[2].username}
        //         <span>이메일 : {users[2].email}</span>
        //     </div>
        // </div>
        <div>
            {users.map(user => <User user={user} key={user.id} onDelete={onDelete} onToggle={onToggle}/>)}
        </div>
    );
};

export default UserList;