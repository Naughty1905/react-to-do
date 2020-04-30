import React, {Component} from "react";
import './todo-list-item.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false,
    };

    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    };

    changeImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };

    render() {

        let {done, important} = this.state;
        let classNameSpan = 'todo-list-item';
        if (done) {
            classNameSpan += ' done';
        }
        if (important) {
            classNameSpan += ' important';
        }

        return (
            <span className={classNameSpan}>
            <span
                className="todo-list-item-label"
                onClick={this.onLabelClick}
            >
                {this.props.label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.changeImportant}
            >
                <i className="fa fa-exclamation"/>
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={this.props.onDeleted}
            >
                <i className="fa fa-trash-o"/>
            </button>
        </span>
        );
    }
}

