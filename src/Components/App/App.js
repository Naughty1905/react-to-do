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
            this.createTodoItem('Drink water'),
            this.createTodoItem('Eat pizza'),
            this.createTodoItem('Sleep'),
            this.createTodoItem('Wash'),
        ],
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: todoData.filter((el) => el.id !== id)
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text)

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });
    };

    toggleProperty = (array, id, propName) => {
            const idx = array.findIndex((el) => el.id===id);
            const oldItem = array[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};
            const newArray = [
                ...array.slice(0, idx),
                newItem,
                ...array.slice(idx+1)
            ];
            return newArray;
    }

    toggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    toggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    render() {
        const doneLength = this.state.todoData.reduce((accumulator,el) => {
            if(el.done){
                accumulator++;
            }
            return accumulator;
        },0);
        const todosLength = this.state.todoData.length-doneLength;
        return (
            <div className="todo-app">
                <AppHeader toDo={todosLength} done={doneLength}/>
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

