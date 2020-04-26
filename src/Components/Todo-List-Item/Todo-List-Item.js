import React from "react";

const TodoListItem = (props) => {
    const itemStyle = {
        color: props.important ? 'red' : 'black'
    }
    return <span style={itemStyle}>{ props.label }</span>;
}

export default TodoListItem;
