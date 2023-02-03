
const intialState = {
    cart:[]
}
const cartReducer = (state=intialState,action) =>{
    switch(action.type){
        case "Add_Value" :
            const ItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            console.log("🚀 ~ file: cartReducer.js:9 ~ cartReducer ~ ItemIndex", ItemIndex)
            if(ItemIndex >= 0){
                state.cart[ItemIndex].qnty +=1;
            }else{
                const temp = {...action.payload,qnty:1}
                return {
                    ...state,
                    cart:[...state.cart,temp]
                }
            };

        case "Remove_value" :
            const data = state.cart.filter((val) => val.id !== action.payload)
            return {
                ...state,
                cart:data
            }

        case "Remove_Single":
            const ItemIndexDec = state.cart.findIndex((item)=> item.id === action.payload.id);
            if(state.cart[ItemIndexDec].qnty >=1){
                const delItem = state.cart[ItemIndexDec].qnty -=1;

                return {
                    ...state,
                    cart:[...state.cart]
                }
            }else if(state.cart[ItemIndexDec].qnty === 1){
                const data = state.cart.filter((val) => val.id !== action.payload.id);
                return {
                    ...state,
                    cart:data
                }
            }


        default: return state
    }
}

export default cartReducer