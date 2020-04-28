import AppHeader from "../App-Header";
import SearchPanel from "../Search-Panel";
import ItemStatusFilter from "../Item-Status-Filter";
import TodoList from "../Todo-List";
import React from "react";
import './app.css';

const App = () => {
    const todoData = [
        {label: 'Drink water', important: false, id: 1},
        {label: 'Eat pizza', important: false, id: 2},
        {label: 'Sleep', important: true, id: 3},
        {label: 'Wash', important: false, id: 4},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;
