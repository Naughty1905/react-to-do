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
        filter: 'active',
        term:'',
        todoData: [
            this.createTodoItem('Drink water'),
            this.createTodoItem('Eat pizza'),
            this.createTodoItem('Sleep'),
            this.createTodoItem('Wash'),
        ],
    };

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
        return [
                ...array.slice(0, idx),
                newItem,
                ...array.slice(idx + 1)
            ];
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

    search = (items, term) => {
        if(term.length===0){
            return items;
        }

        return items.filter((el) => {
            return el.label.toLowerCase().indexOf(term) > -1;
        })
    };

    onSearchChange = (search) => {
        this.setState({term:search});
    };

    filter(items, filter) {
      switch(filter){
          case 'All':
              return items;
          case 'Active':
              return items.filter((el) => !el.done);
          case 'Done':
              return items.filter((el)=> el.done);
          default:
              return items;
      };
    };

    onFilterChange = (filter) =>{
        this.setState({filter});
    }

    render() {
        const doneLength = this.state.todoData.reduce((accumulator,el) => {
            if(el.done){
                accumulator++;
            }
            return accumulator;
        },0);
        const todosLength = this.state.todoData.length-doneLength;

        const { term, todoData, filter } = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        return (
            <div className="todo-app">
                <AppHeader toDo={todosLength} done={doneLength}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}
                    />
                    <ItemStatusFilter
                        onFilterChange={this.onFilterChange}
                        filter={this.state.filter}/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.toggleDone}
                    onToggleImportant={this.toggleImportant}
                />
                <AddItemForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}

