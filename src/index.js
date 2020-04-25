import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
    const items = ['Use React', 'Build App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo list</h1>;
};

const SearchPanel = () => {
    return <input type="text" placeholder="search"/>;
};

const App = () => {
    const isLoggedIn = false;
    const loginBox = <span>Log in please</span>
    const welcomeBox = <span>Welcome back</span>
    return (
        <div>
            { isLoggedIn ? welcomeBox : loginBox }
            <span> {(new Date()).toString()} </span>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};


ReactDOM.render(<App/>, document.getElementById('root'));

