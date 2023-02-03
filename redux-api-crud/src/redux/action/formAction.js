import axios from "axios"

// const getUsers = (user) =>({
//     type:"Get_User",
//     payload:user
// });

// const deleUser = () =>({
//     type:"Delete_User",
// });

// const addUser = () =>({
//     type:"Add_User",
// });

// const getUser = (user) =>({
//     type:"Get_Single_User",
//     payload:user
// });

// const updatedData = () =>({
//     type:"Update_User"
// });

export const loadUsers = () =>{
    return function (dispatch){
        axios.get(`http://localhost:5000/user`)
        .then((resp)=>{
            dispatch({type:"Get_User",payload:resp.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const delteUsers = (Id) =>{
    return function (dispatch){
        axios.delete(`http://localhost:5000/user/${Id}`)
        .then((resp)=>{
            console.log("🚀 ~ file: formAction.js:12 ~ .then ~ resp", resp)
            dispatch({ type:"Delete_User"});
            dispatch(loadUsers());
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const addUsers = (user) =>{
    return function (dispatch){
        axios.post(`http://localhost:5000/user`,user)
        .then((resp)=>{
            dispatch({type:"Add_User"});
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getSingleUser = (Id) =>{
    return function (dispatch){
        axios.get(`http://localhost:5000/user/${Id}`)
        .then((resp)=>{
            console.log("🚀 ~ file: formAction.js:12 ~ .then ~ resp", resp)
            dispatch({type:"Get_Single_User",payload:resp.data});
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const updateUser = (val,Id) =>{
    return function (dispatch){
        axios.put(`http://localhost:5000/user/${Id}`,val)
        .then((resp)=>{
            console.log("🚀 ~ file: formAction.js:12 ~ .then ~ resp", resp)
            dispatch({type:"Update_User"});
            dispatch(loadUsers());
        })
        .catch((err)=>{
            console.log(err);
        })
    }
}