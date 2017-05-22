/**
 * Created by yuriyreva on 12.05.17.
 */
import fetch from 'isomorphic-fetch';
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
    CLEAR_COMPLETED_TODOS,
    CLEAR_COMPLETED_TODOS_SUCCESS,
    CLEAR_COMPLETED_TODOS_ERROR,
    CHANGE_FILTER,

} from '../constants/ActionTypes';
import {API_SERVER_URL} from '../constants/Server';

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function returnJson(response) {
    return response.json();
}

export function getTodos() {
    return (dispatch) => {
        dispatch({type: GET_TODOS});
        return fetch(API_SERVER_URL)
            .then(handleErrors)
            .then(returnJson)
            .then(data => dispatch({type: GET_TODOS_SUCCESS, payload: data}))
            .catch(error => dispatch({type: GET_TODOS_ERROR, payload: error.message}));
    }
}

export function addTodo(id, text) {
    return (dispatch) => {
        let data = {
            id: id,
            text: text
        };
        dispatch({type: ADD_TODO});
        return fetch(API_SERVER_URL, {method: 'POST', body: JSON.stringify(data)})
            .then(handleErrors)
            .then(returnJson)
            .then(data => dispatch({type: ADD_TODO_SUCCESS, payload: data}))
            .catch(error => dispatch({type: ADD_TODO_ERROR, payload: error.message}));
    }
}

export function deleteTodo(id) {
    return (dispatch) => {
        dispatch({type: DELETE_TODO});
        return fetch(API_SERVER_URL, {method: 'DELETE', body: id})
            .then(handleErrors)
            .then(returnJson)
            .then(data => dispatch({type: DELETE_TODO_SUCCESS, payload: data.id}))
            .catch(error => dispatch({type: DELETE_TODO_ERROR, payload: error.message}));
    };
}

export function toggleTodo(id) {
    return (dispatch) => {
        let data = {'id': id};
        dispatch({type: TOGGLE_TODO});
        return fetch(API_SERVER_URL, {method: 'PUT', body: JSON.stringify(data)})
            .then(handleErrors)
            .then(returnJson)
            .then(data => dispatch({type: TOGGLE_TODO_SUCCESS, payload: data.id}))
            .catch(error => dispatch({type: TOGGLE_TODO_ERROR, payload: error.message}));
    };
}

export function editTodo(id, text) {
    return (dispatch) => {
        let data = {'id': id, 'text': text};
        dispatch({type: EDIT_TODO});
        return fetch(API_SERVER_URL, {method: 'PUT', body: JSON.stringify(data)})
            .then(handleErrors)
            .then(returnJson)
            .then(data => dispatch({type: EDIT_TODO_SUCCESS, payload: data}))
            .catch(error => dispatch({type: EDIT_TODO_ERROR, payload: error.message}));
    };
}

export function clearCompleted() {
    return (dispatch) => {
        dispatch({type: CLEAR_COMPLETED_TODOS});
        return fetch(API_SERVER_URL, {method: 'DELETE'})
            .then(handleErrors)
            .then(returnJson)
            .then(data => dispatch({type: CLEAR_COMPLETED_TODOS_SUCCESS, payload: data.ids}))
            .catch(error => dispatch({type: CLEAR_COMPLETED_TODOS_ERROR, payload: error.message}));
    };
}

export function changeFilter(value) {
    return {
        type: CHANGE_FILTER,
        payload: value
    }
}


