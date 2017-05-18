/**
 * Created by yuriyreva on 12.05.17.
 */
import {CHANGE_FILTER} from '../constants/ActionTypes';
import {SHOW_ALL_TODOS} from  "../constants/TodoFilters";

export default function filter(state = SHOW_ALL_TODOS, action) {
    switch (action.type) {
        case CHANGE_FILTER:
            return state = action.payload;
        default:
            return state;
    }
}