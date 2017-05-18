import React, {Component} from 'react';
import {SHOW_ALL_TODOS, SHOW_ACTIVE_TODOS, SHOW_COMPLETED_TODOS} from  "../constants/TodoFilters";
import TodoCounter from "./TodoCounter";
import PropTypes from 'prop-types';


class Filters extends Component {
    render() {
        return (
            <div className="filters">
                <TodoCounter countOfActiveTodos={this.props.countOfActiveTodos} />
                <a href="#" onClick={() => this.props.changeFilter(SHOW_ALL_TODOS)}>All</a>
                <a href="#" onClick={() => this.props.changeFilter(SHOW_ACTIVE_TODOS)}>Active</a>
                <a href="#" onClick={() => this.props.changeFilter(SHOW_COMPLETED_TODOS)}>Completed</a>
            </div>
        )
    }
}

Filters.propTypes = {
    changeFilter: PropTypes.func,
    countOfActiveTodos: PropTypes.number
};

export default Filters;
