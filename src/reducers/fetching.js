/**
 * Created by yuriyreva on 12.05.17.
 */
import {
    DELETE_TODO,
    DELETE_TODO_ERROR,
    DELETE_TODO_SUCCESS,
    GET_TODOS,
    GET_TODOS_ERROR,
    GET_TODOS_SUCCESS,
    ADD_TODO,
    ADD_TODO_ERROR,
    ADD_TODO_SUCCESS,
    TOGGLE_TODO,
    TOGGLE_TODO_ERROR,
    TOGGLE_TODO_SUCCESS,
    EDIT_TODO,
    EDIT_TODO_ERROR,
    EDIT_TODO_SUCCESS
} from '../constants/ActionTypes';


export default function fetching(state = false, action) {
    switch (action.type) {
        case ADD_TODO:
        case GET_TODOS:
        case DELETE_TODO:
        case TOGGLE_TODO:
        case EDIT_TODO:
            return true;
        case ADD_TODO_ERROR:
        case GET_TODOS_ERROR:
        case DELETE_TODO_ERROR:
        case TOGGLE_TODO_ERROR:
        case EDIT_TODO_ERROR:
        case ADD_TODO_SUCCESS:
        case GET_TODOS_SUCCESS:
        case DELETE_TODO_SUCCESS:
        case TOGGLE_TODO_SUCCESS:
        case EDIT_TODO_SUCCESS:
            return false;
        default:
            return state;
    }
}