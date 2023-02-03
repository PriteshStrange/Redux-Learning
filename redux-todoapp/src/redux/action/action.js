
export const Add = (item) =>{
    return {
        type:"Add_Todo",
        payload:item
    }
}

export const Remove = (id) =>{
    console.log("hello ifd",id)
    return {
        type:"Remove_Todo",
        payload:id
    }
}

export const editData = (item,id) =>{
    return {
        type:"Edit_Todo",
        payload:item,
        d:id
    }
}