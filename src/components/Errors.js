/**
 * Created by yuriyreva on 16.05.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Errors extends Component {

    render() {
        return (
            <div className="todo-errors">
                <h3>Errors: </h3>
                <p>{this.props.errors}</p>
            </div>
        )
    }
}

Errors.propTypes = {
    errors: PropTypes.string
};

export default Errors;