import './App.css';
import UserList from './components/UserList';
import { useState, useRef, useReducer } from 'react';
import CreateUser from './components/CreateUser';

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
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
  ]
}
function reducer(state, action){
  switch(action.type){
    case "CHANGE_INPUT":
      return {
          ...state,
          inputs: {
              ...state.inputs,
              [action.name]: action.value,
          }
      };
    case "CREATE_USER":
      return {
          inputs: initialState.inputs,
          users: state.users.concat(action.user),
        //   users: [...state.users, user],
      };
    case "DELETE_USER":
      return {
          ...state,
          users: state.users.filter(user=> user.id !== action.id),
      };
    case "ACTIVE_USER":
      return {
          ...state,
          users: state.users.map(user=> 
            user.id === action.id ? {...user, active: !user.active } : user),
      };
    default:
      return state;
  }
}
function App() {
  //useReducer로 상태관리
  const [ state, dispatch ] = useReducer(reducer,initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch({
        type: "CHANGE_INPUT",
        name: name,
        value: value,
    })
  }
  const onCreate = () => {
    dispatch({
        type: "CREATE_USER",
        user: {
            id: nextId.current,
            username: username,
            email: email,
        }
    })
    nextId.current += 1;
  }
  const nextId = useRef(4);
  const onDelete = (id) => {
      dispatch({
          type: "DELETE_USER",
          id: id,
      })
  }
  const onToggle = (id) => {
      dispatch({
          type: "ACTIVE_USER",
          id: id,
      })
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
