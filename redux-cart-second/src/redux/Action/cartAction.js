
export const Add = (item) => {
    return {
        type:"Add_Value",
        payload:item
    }
}

export const Remove = (id) =>{
    return {
        type:"Remove_value",
        payload:id
    }
}

export const RemoveSingle = (item) =>{
    return {
        type:"Remove_Single",
        payload:item
    }
}
