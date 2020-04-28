import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./Components/Todo-List/Todo-List";
import SearchPanel from "./Components/Search-Panel/Search-Panel";
import AppHeader from "./Components/App-Header/App-Header";
import ItemStatusFilter from "./Components/Item-Status-Filter/Item-Status-Filter";
import './index.css'

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


ReactDOM.render(<App/>, document.getElementById('root'));

