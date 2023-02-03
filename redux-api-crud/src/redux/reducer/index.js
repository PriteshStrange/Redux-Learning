import { combineReducers } from "redux";
import formReducer from './formReducer';


const rootReducer = combineReducers({
    data:formReducer
});

export default rootReducer