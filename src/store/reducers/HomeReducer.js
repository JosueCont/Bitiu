import {FETCH_CRYPTO, CHOOSE_DETAIL, FETCH_LOADING} from '../types';

const initialState = {
    cryptoData:[],
    index:null,
    loading:false
}

export default (state = initialState, action ) => {
    switch(action.type){
        case FETCH_CRYPTO:
            return {...state, cryptoData:action.payload, loading:false};
        case CHOOSE_DETAIL:
            return{...state, index:action.payload};
        case FETCH_LOADING:
            return{...state, loading:true}
        default:
            return state;
    }
};