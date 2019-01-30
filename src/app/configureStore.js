// configureStore.js

import {createStore,
        combineReducers,
        applyMiddleware} from 'redux';

import counterReducer from './state/reducers/counterReducer';
import productReducer from './state/reducers/productReducer';

import thunk from 'redux-thunk';


// (store)
function loggerMiddleware(store) {
    return function(nextFunc) {
        return function(action) {
            console.log('LOGGER MIDDLEWARE', action);

            return nextFunc(action);
        }
    }
}

function cacheMiddleware(store) {
    return function(nextFunc) {
        return function(action) {
            console.log('CACHE MIDDLEWARE', action);

            const result = nextFunc(action);

            if (action.type && action.type.indexOf('COUNTER.') >= 0) {
                const state = store.getState();
                window.localStorage.setItem("counter", state.counter)
            }

            return result;
        }
    }
}

const configureStore = () => {
    const rootReducer = combineReducers({
        counter: counterReducer,
        product: productReducer
    })

    const counterFromLocalStorage = parseInt(window.localStorage.getItem("counter")) || 0;
    const initialState = {
        counter: counterFromLocalStorage
    }

    const store = createStore(rootReducer, 
                        initialState,
                    applyMiddleware(loggerMiddleware, 
                                    cacheMiddleware, thunk));

    return store;
}

export default configureStore;