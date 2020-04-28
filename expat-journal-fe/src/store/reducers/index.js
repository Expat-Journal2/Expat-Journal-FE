import {combineReducers} from 'redux';
import {formReducer} from "./formReducers";
import {postReducer} from "./postReducer"

export default combineReducers({
    formReducer, postReducer
})