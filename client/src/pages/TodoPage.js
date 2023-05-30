import React, {useState, useEffect} from 'react';
import TodoList from '../components/TodoList';
import { getTasks, createTask, deleteTask } from '../api/taskApi';
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

    const delTask = (id) => {
        deleteTask(id)
        .then(({data: deleteTask}) => {
            const updatedTask = todos.filter(td => td._id !== deleteTask._id);
            setTodos(updatedTask);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <ToDoForm sendData={getNewTd} />
            <TodoList todos={todos} delCallback={delTask} />
        </div>
    );
}

export default TodoPage;
