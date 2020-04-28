import {axiosWithAuth} from "../../utils/axiosWithAuth";
// import {initialState, formReducer, postReducer} from "../reducers";

export const fetchUserInfo = () => {
    return dispatch => {
        dispatch({type: "FETCH_USER_START"})
        axiosWithAuth()
        .get(`/api/users/${localStorage.getItem('userId')}`)
        .then(res =>{
            console.log(`fetchUserInfo res`, res)
            dispatch({type: "FETCH_USER_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(`fetchUserInfo err`, err)
        })
    }
}
export const fetchUserBlogs = () => {
    return dispatch =>{
        dispatch({type: "FETCH_DATA_START"})
       
        axiosWithAuth()
        .get(`/api/users/${localStorage.getItem('userId')}/blogs`)
        .then(res => {
            console.log(res)
            dispatch({type: "FETCH_DATA_SUCCESS", payload: res})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const fetchAllPosts = () => {
    return dispatch => {
        dispatch({type: "FETCH_ALL_POSTS_START"})
        axiosWithAuth()
        .get(`/api/blogs`)
        .then(res=> {
            console.log(res.data)
            dispatch({type: "FETCH_ALL_POSTS_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const AddNewPost = post => {
    return dispatch => {
        dispatch({type: "ADD_NEW_POST_START"})
        axiosWithAuth()
        .post(`/api/users/${localStorage.getItem('userId')}/blogs`, post)
        .then(res=> {
            console.log(`response from addnew post`, res)
            dispatch({type: "ADD_NEW_POST_SUCCESSFUL"})
        })
        .catch(err=> {
            console.log(`error from addnew`, err)
            dispatch({type: "ADD_NEW_POST_FAILURE", payload:err})
        })
    }
}