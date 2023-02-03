const intialState = {
    userData :[]
}
const todoReducer = (state=intialState,action) =>{
    // console.log(":",action.payload) 
    switch(action.type){
        case "Add_Todo" :
            return {
                ...state,
                userData:[...state.userData,action.payload]
            };

        case "Remove_Todo" :
            const updated = state.userData.filter((val,k) => k !== action.payload);      
            return {
                ...state,
                userData:updated
            }
        
        case "Edit_Todo" :
            const newData = state.userData.map((val,k)=> k === action.d ? action.payload : val);

            return {
                ...state,
                userData : newData
            }
        default :return state
    }
}

export default todoReducer;