/**
 * Created by yuriyreva on 16.05.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoCounter extends Component {
    getItemName() {
        return this.props.countOfActiveTodos === 1 ? 'item' : 'items';
    }

    render() {
        return (
            <span className="todo-counter">
                <strong>{this.props.countOfActiveTodos}</strong> {this.getItemName()}
            </span>
        )
    }
}

TodoCounter.propTypes = {
    countOfActiveTodos: PropTypes.number
};

export default TodoCounter;