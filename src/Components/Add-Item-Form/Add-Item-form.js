import React, {Component} from "react";
import './add-item-form.css';

export default class AddItemForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.label) {
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: ''
            });
        }
    };

    render() {
        return (
            <form className="add-item-form d-flex"
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                       placeholder="add todo"
                       className="form-control mr-1"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />
                <button className="add-item-form-button btn btn-outline-secondary"
                >
                    Add
                </button>
            </form>
        );
    };
};
