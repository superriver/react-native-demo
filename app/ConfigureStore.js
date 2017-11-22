
'use strict';
import {createStore,applyMiddleware} from 'redux';

import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers/index'
const createStoreWithMiddleware =  applyMiddleware(thunkMiddleware)(createStore);
export default function configureStore(initialState){
    const store = createStoreWithMiddleware(rootReducers,initialState);
    return store;
}