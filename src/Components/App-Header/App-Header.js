import React from "react";
import './app-header.css'

const AppHeader = (props) => {
    return (
        <div>
            <h1>My Todo list</h1>
            <h2>{props.toDo} more to do,{props.done} done</h2>
        </div>);
};

export default AppHeader;

