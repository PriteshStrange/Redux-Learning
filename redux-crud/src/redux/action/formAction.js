export const Add = (item) =>{
    return {
        type:"Add_data",
        payload:item
    }
}

export const Delete = (Id) => {
    return {
        type:"Delete_Data",
        payload:Id
    }
}

export const Update = (item) =>{
    return {
        type:"Update_Data",
        payload:item
    }
}