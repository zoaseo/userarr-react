import './App.css';
import UserList from './components/UserList';
import { useState, useRef } from 'react';
import CreateUser from './components/CreateUser';

function App() {
  //CreateUser의 입력 인풋을 상태관리
  const [ inputs, setInputs ] = useState({
    username: '',
    email: '',
  });
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })
    console.log(inputs);
  }
  const {username, email} = inputs;
  //useState()실행 -> 배열 return
  //arr[0] = 상태
  //arr[1] = 상태를 변경해주는 f
  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'green',
      email: 'green@gmail.com',
      active: false,
  },
  {
      id: 2,
      username: 'blue',
      email: 'blue@gmail.com',
      active: false,
  },
  {
      id: 3,
      username: 'yellow',
      email: 'yellow@gmail.com',
      active: false,
  }
  ])
  const nextId = useRef(4);
  //배열에 새로운 항목을 추가하는 함수
  //users 배열에 새로운 user 객체를 추가
  const onCreate = () => {
    //새로운 user 객체 생성
    const user = {
      id: nextId.current,
      username, // = username: username
      email, // = email: email
      active: false,
    }
    setUsers([...users,user]);
    setInputs({
      username: '',
      email: '',
    })
    nextId.current += 1;
  }
  // const users = [
  //   {
  //       id: 1,
  //       username: 'green',
  //       email: 'green@gmail.com',
  //   },
  //   {
  //       id: 2,
  //       username: 'blue',
  //       email: 'blue@gmail.com',
  //   },
  //   {
  //       id: 3,
  //       username: 'yellow',
  //       email: 'yellow@gmail.com',
  //   }
  // ]
  // users 배열에 해당 id는 삭제
  // filter -> 해당하는 id와 user객체의 id가 다른 객체만 새 배열로 반환
  const onDelete = (id) => {
    setUsers(users.filter(user=> id !== user.id));
  }
  const onToggle = (id) => {
    // 배열 메소드 map
    setUsers(users.map(user=> id ===user.id? {...user, active : !user.active} : user));
  }
  return (
    <div className="App">
        <CreateUser email={email} username={username} onChange={onChange} 
        onCreate={onCreate}></CreateUser>
        <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App;
