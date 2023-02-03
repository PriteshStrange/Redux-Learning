// import  {ActionTypes}  from "../constats/ActionTypes";

import  ActionTypes  from "../constats/ActionTypes";

const intialState ={
    products:[]
}

export const  productReducer = (state=intialState,action)=>{
    const {type,payload} = action;
    switch (type ) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;
    }   
}

export const selectedProductReducer  = (state={},{type,payload}) =>{
    switch (type ) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}; 
        default:
            return state;
    }   
}

