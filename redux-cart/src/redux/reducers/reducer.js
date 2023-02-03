const INTIAL_STATE = {
    cart:[]
}

export const cartReducer = (state=INTIAL_STATE,action) =>{
    switch (action.type) {
        case "Add_Cart":
            const ItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if(ItemIndex >= 0){
                state.cart[ItemIndex].qnty += 1;
            }else{
                const temp = {...action.payload,qnty:1}
                return {
                    ...state,
                    cart:[...state.cart,temp]
                }
            };
            
        case "Remove_cart":
            console.log("state.cart",state.cart)
            const data = state.cart.filter((val) => val.id !== action.payload)
            return {
                ...state,
                cart:data
            }   

        case "Remove_Single":
            const ItemIndex_dec = state.cart.findIndex((item) => item.id === action.payload.id)
            if(state.cart[ItemIndex_dec].qnty >= 1){
                const delItem = state.cart[ItemIndex_dec].qnty -= 1;
                console.log([...state.cart,delItem]);

                return {
                    ...state,
                    cart:[...state.cart]
                }
            }else if(state.cart[ItemIndex_dec].qnty === 1){
                const data = state.cart.filter((val) => val.id !== action.payload);
                return {
                    ...state,
                    cart:data
                }
            }
        default:
            return state;
    }
}