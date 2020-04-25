import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./Components/Todo-List/Todo-List";
import SearchPanel from "./Components/Search-Panel/Search-Panel";
import AppHeader from "./Components/App-Header/App-Header";


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

