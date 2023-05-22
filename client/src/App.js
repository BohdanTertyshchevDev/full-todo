import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, redirect} from "react-router-dom";
import Home from './pages/Home/Home';
import TodoPage from './pages/TodoPage';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home sendUser={setUser} />}/>
        {/* localhost:3000/ -> Home component */}
        <Route path="/tasks/" element={<Dashboard user={user} sendUser={setUser} />}/>
        {/* localhost:3000/tasks/ -> TodoPage component */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
