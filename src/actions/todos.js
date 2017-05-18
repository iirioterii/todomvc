/**
 * Created by yuriyreva on 12.05.17.
 */
import $ from "jquery";
import {
    ADD_TODO,
    ADD_TODO_ERROR,
    ADD_TODO_SUCCESS,
    DELETE_TODO,
    DELETE_TODO_SUCCESS,
    DELETE_TODO_ERROR,
    TOGGLE_TODO,
    TOGGLE_TODO_ERROR,
    TOGGLE_TODO_SUCCESS,
    EDIT_TODO,
    EDIT_TODO_ERROR,
    EDIT_TODO_SUCCESS,
    GET_TODOS,
    GET_TODOS_ERROR,
    GET_TODOS_SUCCESS,
    CHANGE_FILTER,

} from '../constants/ActionTypes';
import {API_SERVER_URL} from '../constants/Server';


export function getTodos() {
    return (dispatch) => {
        dispatch({type: GET_TODOS});
        $.ajax({
            method: "get",
            url: API_SERVER_URL,
            dataType: "json"
        }).done(function (data) {
            dispatch({type: GET_TODOS_SUCCESS, payload: data})

        }).fail(function (jqXHR, textStatus) {
            dispatch({type: GET_TODOS_ERROR, payload: textStatus})
        });
    }
}

export function addTodo(id, text) {
    return (dispatch) => {
        let data = {
            id: id,
            text: text
        };
        dispatch({type: ADD_TODO});
        $.ajax({
            method: "post",
            url: API_SERVER_URL,
            data: data
        }).done(function (data) {
            dispatch({type: ADD_TODO_SUCCESS, payload: data})
        }).fail(function (jqXHR, textStatus,) {
            dispatch({type: ADD_TODO_ERROR, payload: textStatus})
        });
    }
}

export function deleteTodo(id) {
    return (dispatch) => {
        dispatch({type: DELETE_TODO});
        $.ajax({
            method: "delete",
            url: API_SERVER_URL,
            data: id
        }).done(function (data) {
            dispatch({type: DELETE_TODO_SUCCESS, payload: data.id})
        }).fail(function (jqXHR, textStatus,) {
            dispatch({type: DELETE_TODO_ERROR, payload: textStatus})
        });
    };
}

export function toggleTodo(id) {
    return (dispatch) => {
        let data = {'id': id};
        dispatch({type: TOGGLE_TODO});
        $.ajax({
            method: "put",
            url: API_SERVER_URL,
            data: data
        }).done(function (data) {
            dispatch({type: TOGGLE_TODO_SUCCESS, payload: data.id})
        }).fail(function (jqXHR, textStatus,) {
            dispatch({type: TOGGLE_TODO_ERROR, payload: textStatus})
        });
    };
}

export function editTodo(id, text) {
    return (dispatch) => {
        let data = {'id': id, 'text': text};
        dispatch({type: EDIT_TODO});
        $.ajax({
            method: "put",
            url: API_SERVER_URL,
            data: data
        }).done(function (data) {
            dispatch({type: EDIT_TODO_SUCCESS, payload: data})
        }).fail(function (jqXHR, textStatus,) {
            dispatch({type: EDIT_TODO_ERROR, payload: textStatus})
        });
    };
}

export function changeFilter(value) {
    return {
        type: CHANGE_FILTER,
        payload: value
    }
}


