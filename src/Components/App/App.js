import AppHeader from "../App-Header";
import SearchPanel from "../Search-Panel";
import ItemStatusFilter from "../Item-Status-Filter";
import TodoList from "../Todo-List";
import AddItemForm from "../Add-Item-Form";
import React, {Component} from "react";
import './app.css';

export default class App extends Component {

    //не влияет на рендер так что можно не писать в стейт
    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink water', important: false, id: 1},
            {label: 'Eat pizza', important: false, id: 2},
            {label: 'Sleep', important: true, id: 3},
            {label: 'Wash', important: false, id: 4},
        ],
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter((el) => el.id !== id)
            };
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });
    };

    toggleDone = (id) => {
        console.log('important', id);
    }

    toggleImportant = (id) => {
        console.log('done', id);
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.toggleDone}
                    onToggleImportant={this.toggleImportant}
                />
                <AddItemForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}

