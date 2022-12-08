import {FETCH_NEWS} from '../types';

const initialState = {
    newsData:[],
}

export default (state = initialState, action ) => {
    switch(action.type){
        case FETCH_NEWS:
            return {...state, newsData:action.payload};
        default:
            return state;
    }
};