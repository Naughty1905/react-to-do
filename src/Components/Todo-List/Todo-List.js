import React from "react";
import TodoListItem from "../Todo-List-Item/Todo-List-Item";
import './todo-list.css';

const TodoList = (props) => {
    const { todos, onDeleted, onToggleDone, onToggleImportant } = props;
    const elements = todos.map((el) => {
        // в elProps попадут все свойства не деструктуризированные
        // в этом объекте, то есть label, important
        const { id, ...elProps } = el;
        return (
        <li key={el.id} className="list-group-item">
            <TodoListItem
                { ...elProps }
                onDeleted={() => onDeleted(el.id)}
                onToggleDone={() => onToggleDone(el.id)}
                onToggleImportant={() => onToggleImportant(el.id)}
            />
        </li>);
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
