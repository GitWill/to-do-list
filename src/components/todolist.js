import React from 'react';

// import components
import Todo from './todo'

const ToDoList = (todos) => {
    // console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
            </ul>
        </div>
    );
}

export default ToDoList