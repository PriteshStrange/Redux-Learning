import { ActionTypes } from "../constant/actionType";

export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProducts = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
}

export const removeSelectedProduct = () =>{
    return {
        type:ActionTypes.REMOVE__SELECTED_PRODUCTS
    }
}