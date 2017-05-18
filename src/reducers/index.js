/**
 * Created by yuriyreva on 12.05.17.
 */
import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
import fetching from './fetching';
import errors from './errors';


export default combineReducers({
    todos, filter, fetching, errors
});
