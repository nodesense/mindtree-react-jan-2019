// actions.js

import * as ActionTypes from './action-types';

import * as api from './api';

// action creator functions/helpers
// create action object

// export const increment = (value) => {
//     return {
//         type: ActionTypes.INCREMENT,
//         payload: {value}
//     }
// }

export const increment = (value) => ({
        type: ActionTypes.INCREMENT,
        payload: {value}
})

export const reset = () => ({
    type: ActionTypes.RESET
})


export const initProducts = (products) => ({
    type: ActionTypes.INIT_PRODUCTS,
    payload: {products}
})

export const loadingProducts = (loading) => ({
    type: ActionTypes.LOADING_PRODUCTS,
    payload: {loading}
})

export const login = () => ({
    type: ActionTypes.LOGIN
})


export const logout = () => ({
    type: ActionTypes.LOGOUT
})


// thunk: write async in action creators
// dispatch function as an action
// thunk stop the function being forward to reducer
// thunk call the function with dispatch and getState
export function fetchProducts() {
    return function asyncCode(dispatch, getState) {
        console.log('called by thunk')
        dispatch(loadingProducts(true));
        fetch('http://api.nodesense.ai/api/products')
        .then ( response => response.json() )
        .then (products => {
            const action = initProducts(products);
            dispatch(action);
            dispatch(loadingProducts(false));

        })
    }
}

export function addToCartAndRedirect(item, history) {
    return function asyncFunc() {
        console.log('thunk called async function')
        // ...
        //.. 
        history.push('/products');
    }
}


export const initBrands = (brands) => ({
    type: ActionTypes.INIT_BRANDS,
    payload: {brands}
})

export const loadingBrands = (loading) => ({
    type: ActionTypes.LOADING_BRANDS,
    payload: {loading}
})

export function fetchBrands() {
    return function asyncCode(dispatch, getState) {
        console.log('called by thunk')
        dispatch(loadingBrands(true));

        api.getBrands()
           .then (brands => {
            dispatch(initBrands(brands));
            dispatch(loadingBrands(false));
           });
    }
}


export function updateBrand(id, name) {
    return async function asyncCode(dispatch, getState) {
        console.log('called by thunk')

        await api.clearCache();
         
        const result = await api.updateBrand(id, name);
        console.log('brand saved successfully');

        await dispatch(fetchBrands());
    }
}