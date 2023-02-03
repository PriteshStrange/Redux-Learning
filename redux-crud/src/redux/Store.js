import { createStore } from "redux";
import reducer from './formReducer/index';
import { composeWithDevTools } from "redux-devtools-extension";

const saveToLocalStorage = (state) =>{
    try{
        const storeData = JSON.stringify(state);
        localStorage.setItem("FormData",storeData)
    }catch(err){
        console.log("Error ===>",err);
    }
}

const getToLocalStorage = () =>{
    try{
        const formData = localStorage.getItem("FormData");
        if(formData === null) return undefined;
        return JSON.parse(formData);
    }catch(err){
        console.log("Error ====>",err);
    }
}
const store = createStore(reducer,getToLocalStorage(),composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store