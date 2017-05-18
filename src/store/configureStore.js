/**
 * Created by yuriyreva on 12.05.17.
 */
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
