import React, {Component} from "react";
import './add-item-form.css';

export default class AddItemForm extends Component {

    render(){
        return(
            <div className="add-item-form">
                <button className="add-item-form-button btn btn-outline-secondary"
                onClick={() => this.props.onItemAdded('hi mark')}
                >
                    Add Todo
                </button>
            </div>
        );
    };
};
