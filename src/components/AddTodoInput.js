import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodoInput extends Component {

    _getId(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    handleKeyPress(e){
        if (e.key === "Enter" && this.refs.addTodoInput.value !== ''){
            this.props.addTodo(this._getId(), this.refs.addTodoInput.value);
            return this.refs.addTodoInput.value = '';
        }
    }

    render() {
        return(
            <input
                className="add-todo-input"
                type="text"
                ref="addTodoInput"
                placeholder="What do you want to do?"
                onKeyPress={this.handleKeyPress.bind(this)}
            />
        )
    }
}

AddTodoInput.propTypes = {
  addTodo: PropTypes.func
};

export default AddTodoInput;
