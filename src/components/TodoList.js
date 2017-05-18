import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


class TodoList extends Component {
    render() {
        const {actions} = this.props;

        return (
            <ul className="todo-list">
                {this.props.todos.map((todo, index) =>
                    <TodoItem key={index} todo={todo} {...actions}/>
                )}
            </ul>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array,
    actions: PropTypes.objectOf(PropTypes.func)
};

export default TodoList;
