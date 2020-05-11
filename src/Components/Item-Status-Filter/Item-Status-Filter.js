import React, { Component } from "react";
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'All', label: 'All'},
        {name: 'Active', label: 'Active'},
        {name: 'Done', label: 'Done'}
    ];

    render(){
        const filter = this.props;
        let button = this.buttons.map((el) => {
            const isActive = filter === el.name;
            const clazz = isActive ? 'btn-info':'btn-outline-secondary'
            return(
                <button type="button"
                    className={`btn ${clazz}`}
                        key={el.name}
                        onClick={() => this.props.onFilterChange(el.name)}
                >{el.label}</button>
            )
        })
        return(
            <div>
                {button}
            </div>
        );
    }
}

