import {axiosWithAuth} from "../../utils/axiosWithAuth";
// import {initialState, formReducer, postReducer} from "../reducers";

export const fetchUserInfo = () => {
    return dispatch => {
        dispatch({type: "FETCH_USER_START"})
        axiosWithAuth()
        .get(`/api/users/${localStorage.getItem('userId')}`)
        .then(res =>{
            dispatch({type: "FETCH_USER_SUCCESS", payload: res.data})
        })
        .catch(err => {
            alert(err)
        })
    }
}
export const fetchUserBlogs = () => {
    return dispatch =>{
        dispatch({type: "FETCH_DATA_START"})
       
        axiosWithAuth()
        .get(`/api/users/${localStorage.getItem('userId')}/blogs`)
        .then(res => {
            dispatch({type: "FETCH_DATA_SUCCESS", payload: res})
        })
        .catch(err => {
            alert(`User has no posts, please click "New Post" to get started`,err)
        })
    }
}

export const fetchAllPosts = () => {
    return dispatch => {
        dispatch({type: "FETCH_ALL_POSTS_START"})
        axiosWithAuth()
        .get(`/api/blogs`)
        .then(res=> {
            dispatch({type: "FETCH_ALL_POSTS_SUCCESS", payload: res.data})
        })
        .catch(err => {
            alert(err)
        })
    }
}

export const AddNewPost = post => {
    return dispatch => {
        dispatch({type: "ADD_NEW_POST_START"})
        axiosWithAuth()
        .post(`/api/users/${localStorage.getItem('userId')}/blogs`, post)
        .then(res=> {
            dispatch({type: "ADD_NEW_POST_SUCCESSFUL"})
        })
        .catch(err=> {
            dispatch({type: "ADD_NEW_POST_FAILURE", payload:err})
        })
    }
}


//Not working (((((((((((((((())))))))))))))))
export const editPost = post => {
    return dispatch => {
        dispatch({type: "ADD_NEW_POST_START"})
        axiosWithAuth()
        .put(`/api/users/${localStorage.getItem('userId')}/blogs`, post)
        .then(res=> {
            dispatch({type: "ADD_NEW_POST_SUCCESSFUL"})
        })
        .catch(err=> {
            dispatch({type: "ADD_NEW_POST_FAILURE", payload:err})
        })
    }
}
//Not working (((((((((((((((())))))))))))))))