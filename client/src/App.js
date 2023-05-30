import React, {useState, useEffect} from 'react';
import {unstable_HistoryRouter as HistoryRouter, Routes, Route, redirect} from "react-router-dom";
import Home from './pages/Home/Home';
import TodoPage from './pages/TodoPage';
import './App.css';
import history from './BrowserHistory';
import {authUser} from './api/userApi';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(!user) {
      const token = localStorage.getItem('token');
      if(token) {
          // робимо запит на отримання юзера
          authUser(token)
          .then(userData => {
              setUser(userData.data);
          }).catch(error => {
              history.push('/');
          })
      } else {
        history.push('/');
      }
  }
}, [user])

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Home sendUser={setUser} />}/>
        {/* localhost:3000/ -> Home component */}
        <Route path="/tasks/" element={<TodoPage user={user} />}/>
        {/* localhost:3000/tasks/ -> TodoPage component */}
      </Routes>
    </HistoryRouter>
  );
}

export default App;
