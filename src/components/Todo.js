import React from "react";
import "../TodoComponents/Todo.css";
// this function makes an on click toggle complete
const Todo = props => {
    return (
        <div className={`task${props.task.completed ? '-completed' : ''}`}>
            <h1 onClick={event => { props.toggleCompleted(props.task.id) }}>{props.task.task}</h1>
        </div>
    );
};
export default Todo; 