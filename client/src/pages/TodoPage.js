import React, { useEffect, useState } from 'react';
import TodoList from '../components/ToDoList';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <div>
            <h1>ToDo List</h1>
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoPage;
