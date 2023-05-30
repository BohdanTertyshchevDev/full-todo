import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';
import { getTasks, createTask } from '../api/taskApi';
import {authUser} from '../api/userApi';
import { useNavigate } from 'react-router-dom';
import ToDoForm from '../components/TodoForm';

const TodoPage = (props) => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
            getTasks()
            .then(result => {
                setTodos(result.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const getNewTd = (data) => {
        createTask({
            status: 'new',
            ...data
        }).then(({data: createdTask}) => {
            const newTodo = [...todos, createdTask];
            setTodos(newTodo);
        })
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <ToDoForm sendData={getNewTd} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoPage;
