
const intialState ={
    formData:[]
}


const FormReducer = (state=intialState,action) =>{
    
    switch (action.type) {
        case "Add_data":
            const newData = {...action.payload,id:new Date().getTime().toString()}
            return {
                ...state,
                formData:[...state.formData,newData]
            }

        case "Delete_Data" :
            const deleteData = state.formData.filter((val)=> val.id !== action.payload);

            return {
                ...state,
                formData:deleteData
            }
        
        case "Update_Data" :
            const updatedData = state.formData.map((val) => val.id === action.payload.id ? action.payload : val);   
            
            return {
                ...state,
                formData:updatedData
            }
        default:
            return state
    }
}

export default FormReducer