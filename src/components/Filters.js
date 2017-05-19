import React, {Component} from 'react';
import {SHOW_ALL_TODOS, SHOW_ACTIVE_TODOS, SHOW_COMPLETED_TODOS} from  "../constants/TodoFilters";
import TodoCounter from "./TodoCounter";
import PropTypes from 'prop-types';
import ClearCompletedButton from "./ClearCompletedButton";


class Filters extends Component {
    render() {
        let clearCompletedButton = this.props.countOfCompletedTodos ?
            <ClearCompletedButton clearCompleted={this.props.clearCompleted}/> : '';

        return (
            <div className="filters">
                <TodoCounter countOfActiveTodos={this.props.countOfActiveTodos} />
                <a href="#" onClick={() => this.props.changeFilter(SHOW_ALL_TODOS)}>All</a>
                <a href="#" onClick={() => this.props.changeFilter(SHOW_ACTIVE_TODOS)}>Active</a>
                <a href="#" onClick={() => this.props.changeFilter(SHOW_COMPLETED_TODOS)}>Completed</a>
                {clearCompletedButton}
            </div>
        )
    }
}

Filters.propTypes = {
    changeFilter: PropTypes.func,
    countOfActiveTodos: PropTypes.number,
    countOfCompletedTodos: PropTypes.number,
    clearCompleted: PropTypes.func
};

export default Filters;
