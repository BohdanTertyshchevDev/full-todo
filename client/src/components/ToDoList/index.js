import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(td => <li>{td}</li>)}
        </div>
    );
}

export default TodoList;
