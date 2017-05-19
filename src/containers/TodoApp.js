import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './TodoApp.css';
import TodoList from "../components/TodoList";
import AddTodoInput from "../components/AddTodoInput";
import * as todosActions from '../actions/todos';
import Filters from "../components/Filters";
import {SHOW_ALL_TODOS, SHOW_ACTIVE_TODOS, SHOW_COMPLETED_TODOS} from  "../constants/TodoFilters";
import ProgressBar from "../components/ProgressBar";
import Errors from "../components/Errors";

class TodoApp extends Component {

    componentDidMount() {
        this.props.todosActions.getTodos();
    }

    getCountOfCompletedTodos() {
        if (this.props.todos) {
            const completedItems = this.props.todos.filter((todo) =>
                todo.completed === true
            );
            return completedItems.length;
        }
        return 0;
    }

    getCountOfActiveTodos() {
        if (this.props.todos) {
            const activeItems = this.props.todos.filter((todo) =>
                todo.completed === false
            );
            return activeItems.length;
        }

        return 0;
    }

    getFilteredTodos(todos, filter) {
        switch (filter) {
            case SHOW_ALL_TODOS:
                return todos;
            case SHOW_ACTIVE_TODOS:
                return todos.filter((todo) =>
                    todo.completed === false
                );
            case SHOW_COMPLETED_TODOS:
                return todos.filter((todo) =>
                    todo.completed === true
                );
            default:
                return todos;
        }
    };

    render() {
        const todosActions = this.props.todosActions;

        let progressBar = this.props.fetching ? <ProgressBar/> : '';
        let errors = this.props.errors ? <Errors errors={this.props.errors}/> : '';

        return (
            <div className="main">
                <AddTodoInput addTodo={todosActions.addTodo}/>
                <TodoList todos={this.getFilteredTodos(this.props.todos, this.props.filter)} actions={todosActions}/>
                <Filters
                    changeFilter={todosActions.changeFilter}
                    countOfActiveTodos={this.getCountOfActiveTodos()}
                    countOfCompletedTodos={this.getCountOfCompletedTodos()}
                    clearCompleted={todosActions.clearCompleted}
                />
                {progressBar}
                {errors}
            </div>
        );
    }
}

//Get access to store
function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter,
        fetching: state.fetching,
        errors: state.errors
    }
}
//Get access to actions
function mapDispatchToProps(dispatch) {
    return {
        todosActions: bindActionCreators(todosActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
