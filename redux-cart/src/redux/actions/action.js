// Add value
export const Add = (item) =>{
    return {
        type:"Add_Cart",
        payload:item
    }
}

//Remove value

export const Remove = (id) =>{
    return {
        type:"Remove_cart",
        payload:id
    }
}

//ReMove individual Item

export const RemoveSingle = (item) =>{
    return {
        type:"Remove_Single",
        payload:item
    }
}