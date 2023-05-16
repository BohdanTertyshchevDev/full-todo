import React, { useEffect, useState } from 'react';
import TodoList from '../components/ToDoList';
import { getTasks } from '../api/taskApi';
import { useNavigate } from 'react-router-dom';

const TodoPage = (props) => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if(!props.user) {
            return navigate('/');
        }

        getTasks(props.user._id)
        .then(result => {
            setTodos(result.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h1>ToDo List</h1>
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoPage;
