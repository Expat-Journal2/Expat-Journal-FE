import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {initialState, formReducer} from "../reducers";

export const Login = (e,user) => {
    return dispatch => {
        dispatch({type: 'LOGIN_START'});
        e.preventDefault();
        axiosWithAuth()
        .post("/api/auth/login", user)
        .then(res => {
            localStorage.setItem("token",res.data.token)
            dispatch ({type: "LOGIN_SUCCESS"})
            dispatch ({type: "SET_USER", payload: res.data})
        })
        .catch(err => {
            console.log("error from actions on login_start",err)
            dispatch ({type: "LOGIN_FAILURE", payload:`${err}`})
        })
    }
}

export const LogOut = () => {
    return dispatch=>{
        dispatch({type: "LOG_OUT"})
        localStorage.removeItem('token')
    }
}