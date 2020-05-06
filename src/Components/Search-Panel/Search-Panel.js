import React, {Component} from "react";
import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        search : ''
    }

    onSearchChange = (event) => {
        const search = event.target.value;
        this.setState({
            search
        });
        this.props.onSearchChange(search);
    }

    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="search"
                onChange={this.onSearchChange}
                value={this.state.search}
            />
        );
    };
};


