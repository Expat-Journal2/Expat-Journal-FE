import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {initialState, formReducer} from "../reducers";

export const Login = user => {
    return dispatch => {
        dispatch({type: 'LOGIN_START'});
        axiosWithAuth()
        .post("/api/auth/login", user)
        .then(res => {
            localStorage.setItem("token",res.data.token)
            dispatch ({type: "LOGIN_SUCCESS"})
        })
        .catch(err => {
            console.log("error from actions on login_start",err)
            dispatch ({type: "LOGIN_FAILURE", payload:`${err}`})
        })
    }
}