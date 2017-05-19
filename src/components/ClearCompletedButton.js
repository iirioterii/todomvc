/**
 * Created by yuriyreva on 16.05.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ClearCompletedButton extends Component {

    render() {
        return (
            <button className="todo-clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
        )
    }
}

ClearCompletedButton.propTypes = {
    clearCompleted: PropTypes.func
};

export default ClearCompletedButton;