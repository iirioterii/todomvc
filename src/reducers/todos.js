/**
 * Created by yuriyreva on 12.05.17.
 */
import {
    DELETE_TODO_SUCCESS,
    EDIT_TODO_SUCCESS,
    GET_TODOS_SUCCESS,
    ADD_TODO_SUCCESS,
    TOGGLE_TODO_SUCCESS
} from '../constants/ActionTypes';

export default function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO_SUCCESS:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ];

        case GET_TODOS_SUCCESS:
            return [
                ...state,
                ...action.payload
            ];

        case DELETE_TODO_SUCCESS:
            return state.filter(todo =>
                todo.id !== action.payload
            );

        case TOGGLE_TODO_SUCCESS:
           return state.map(todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            );


        case EDIT_TODO_SUCCESS:
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
            );

        default:
            return state;
    }
}