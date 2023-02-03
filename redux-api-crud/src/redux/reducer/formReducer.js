
const intialState ={
    users:[],
    user:{},
    loading:true
}

const formReducer = (state=intialState,action) =>{
    switch(action.type){
        case "Get_User":
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        
        case "Delete_User" :
            return {
                ...state,
                loading:false
            }

        case "Add_User" :
            return {
                ...state,
                loading:false
            }

        case "Get_Single_User" :
            return {
                ...state,
                user:action.payload,
                loading:false
            }
        
        case "Update_User" :
            return {
                ...state,
                loading:false
            }
            
        default : return state
    }
}

export default formReducer