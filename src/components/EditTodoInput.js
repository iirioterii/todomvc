/**
 * Created by yuriyreva on 15.05.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class EditTodoInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    handleKeyPressOnEditInput(e) {
        if (e.key === "Enter" && this.refs.editTodoInput.value !== '') {
            this.props.onSave(this.state.text);
        }
    }

    handleOnChangeEditInput(e) {
        return this.setState({text: e.target.value})
    }

    handleOnBlurEditInput(e) {
        this.props.onSave(this.state.text);
    }

    render() {
        return (
            <input
                className={classNames({
                    'todo-edit-input': true
                })}
                ref='editTodoInput'
                type="text"
                autoFocus={true}
                value={this.state.text}
                onChange={this.handleOnChangeEditInput.bind(this)}
                onBlur={this.handleOnBlurEditInput.bind(this)}
                onKeyPress={this.handleKeyPressOnEditInput.bind(this)}
            />
        )

    }
}

EditTodoInput.propTypes= {
    text: PropTypes.string,
    id: PropTypes.string,
    editTodo: PropTypes.func
};

export default EditTodoInput;