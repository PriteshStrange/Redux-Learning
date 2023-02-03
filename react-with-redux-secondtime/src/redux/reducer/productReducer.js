import { ActionTypes } from '../constant/actionType';
const intialState = {
    products :[]
}

export const productReducer = (state=intialState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
    
        default:
            return state;
    }
}

export const selectProductReducer = (state={},{type,payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
                return {...state,...payload};
        case ActionTypes.REMOVE__SELECTED_PRODUCTS:
                return {};
        default:
           return state;
    }
}