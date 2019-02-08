// productReducer.js
import * as ActionTypes from "../action-types";

const INITIAL_STATE = {
    //for products list
    loading: false,    
    brands: []
}

export default
     function brandReducer(state = INITIAL_STATE, action) {
        console.log("brand reducer ", state, action);
        
        switch(action.type) {
            case ActionTypes.INIT_BRANDS: 
                return {...state, brands: action.payload.brands}
            case ActionTypes.LOADING_BRANDS: 
                return {...state, loading: action.payload.loading}
            default:
                return state;
        }

}