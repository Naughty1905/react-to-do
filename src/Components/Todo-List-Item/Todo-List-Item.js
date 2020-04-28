import React from "react";
import './todo-list-item.css'

const TodoListItem = (props) => {
    const itemStyle = {
        color: props.important ? 'steelblue' : 'black',
        fontWeight: props.important ? '700' : '400'
    }
    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={itemStyle}
            >
                {props.label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
            >
                <i className="fa fa-exclamation"/>
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    );

    // <span

    // >
    //
    // </span>;
}

export default TodoListItem;
