import React from "react";
import TodoListItem from "../Todo-List-Item/Todo-List-Item";

const TodoList = () => {
    const items = ['Use React', 'Build App'];
    return (
        <ul>
            <li><TodoListItem label="Drink coffee"/></li>
            <li><TodoListItem
                label="Eat pizza"
                important={true}
            /></li>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

export default TodoList;
