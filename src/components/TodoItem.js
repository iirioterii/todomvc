import React, {Component} from 'react';
import classNames from 'classnames';
import EditTodoInput from "./EditTodoInput";
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    handleClickOnRemove() {
        return this.props.deleteTodo(this.props.todo.id);
    }

    handleChangeCheckbox() {
        return this.props.toggleTodo(this.props.todo.id);
    }

    handleDoubleClickOnLabel() {
        this.setState({editing: true});
    }

    handleSave(id, text) {
        if (text !== '') {
            this.props.editTodo(id, text);
        } else {
            this.props.deleteTodo(id);
        }
        this.setState({editing: false});
    }

    render() {
        const {id, text, completed} = this.props.todo;
        let editInput;
        if (this.state.editing) {
            editInput = (
                <EditTodoInput
                    text={text}
                    id={id}
                    editTodo={this.props.editTodo}
                    onSave={(text) => this.handleSave(id, text)}
                />
            )
        }

        return (
            <li className={classNames({
                completed: completed,
                editing: this.state.editing
            })}>
                <input
                    className="todo-checkbox"
                    type="checkbox"
                    checked={completed}
                    onChange={this.handleChangeCheckbox.bind(this)}
                />
                <label
                    onDoubleClick={this.handleDoubleClickOnLabel.bind(this)}
                >
                    {text}
                </label>
                {editInput}
                <button
                    className="todo-remove"
                    onClick={this.handleClickOnRemove.bind(this)}
                >Remove
                </button>
            </li>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func,
    toggleTodo: PropTypes.func
};

export default TodoItem;
