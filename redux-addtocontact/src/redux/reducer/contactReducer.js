const intialState =[
    {

        id:1,
        name:"hello",
        email:"xyz@gmail.com",
        number:5732737362
    }
]

const contactReducer = (state=intialState,action) =>{
    switch (action.type) {
        case "Add_contact":
            state = [...state,action.payload];
            return state;

        case "Update_contact" :
            const updatedData = state.map((val) => val.id === action.payload.id ? action.payload : val);
            state = updatedData;
            return state;
        
        case "Delete_contact" :
            const checkData = state.filter((val) => val.id !== action.payload);
            state = checkData;
            return state
        default: 
            return state;
    }
}

export default contactReducer