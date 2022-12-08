import { FETCH_CHART, LOADING_CHART } from "../types";

const initialState = {
    periods:[],
    loading:false
}

export default (state = initialState, action ) => {
    switch(action.type){
        case FETCH_CHART:
            return {...state, periods:action.payload, loading:false};
        case LOADING_CHART:
            return{...state, loading:true}
        default:
            return state;
    }
};