// productReducer.js
import * as ActionTypes from "../action-types";

const INITIAL_STATE = {
    //for products list
    loading: false,    
    products: []
}

export default
     function productReducer(state = INITIAL_STATE, action) {
        console.log("product reducer ", state, action);
        
        switch(action.type) {
            case ActionTypes.INIT_PRODUCTS: 
                return {...state, products: action.payload.products}
            case ActionTypes.LOADING_PRODUCTS: 
                return {...state, loading: action.payload.loading}
            default:
                return state;
        }

}