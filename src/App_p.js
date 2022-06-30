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
        case "":
            return state;
    }
}
  
function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);
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
              
          }
      })
  }  

  const nextId = useRef(4);
  
  return (
    <div className="App">
        <CreateUser email={email} username={username} onChange={onChange} 
        onCreate={onCreate}></CreateUser>
        <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
}

export default App;
