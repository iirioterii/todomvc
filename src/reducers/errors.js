/**
 * Created by yuriyreva on 12.05.17.
 */
import {
    TOGGLE_TODO,
    TOGGLE_TODO_ERROR,
    GET_TODOS,
    GET_TODOS_ERROR,
    ADD_TODO_ERROR,
    ADD_TODO,
    DELETE_TODO,
    DELETE_TODO_ERROR,
    EDIT_TODO,
    EDIT_TODO_ERROR,
    CLEAR_COMPLETED_TODOS,
    CLEAR_COMPLETED_TODOS_ERROR
} from '../constants/ActionTypes';


export default function errors(state = false, action) {
    switch (action.type) {
        case ADD_TODO_ERROR:
        case GET_TODOS_ERROR:
        case DELETE_TODO_ERROR:
        case TOGGLE_TODO_ERROR:
        case EDIT_TODO_ERROR:
        case CLEAR_COMPLETED_TODOS_ERROR:
            return action.payload;
        case ADD_TODO:
        case GET_TODOS:
        case DELETE_TODO:
        case TOGGLE_TODO:
        case EDIT_TODO:
        case CLEAR_COMPLETED_TODOS:
            return false;
        default:
            return state;
    }
}