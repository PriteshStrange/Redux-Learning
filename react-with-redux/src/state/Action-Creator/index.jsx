export const deposite = (amount) =>{
    console.log("object",amount);
    return (dispatch) =>{
        dispatch({
            type:"Deposit",
            payload:amount
        })
    }
}

export const withdraw = (amount) =>{
    return (dispatch) =>{
        dispatch({
            type:"Withdraw",
            payload:amount
        })
    }
}