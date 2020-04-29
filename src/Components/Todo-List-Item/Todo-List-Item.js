import React, { Component } from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component{

    render() {
        const itemStyle = {
            color: this.props.important ? 'steelblue' : 'black',
            fontWeight: this.props.important ? '700' : '400'
        }

        return (
            <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={itemStyle}
            >
                {this.props.label}
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
    }
}

