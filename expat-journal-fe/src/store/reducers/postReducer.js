const initialState = {
    id: "",
    fullname: "",
    username: "",
    isLoggedIn: false,
    isLoading: false,
    error: "",
    blogs:[]
}


export const postReducer = (state = initialState, action)=>{
    switch (action.type){
        case "FETCH_DATA_START":
            return {
                ...state,
                isLoggedIn: true,
                isLoading: true
            }
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                isLoading: false,
                id: action.data.userId
            }
        case "FETCH_USER_START": 
            return{
                isLoading: true
            }
        case "FETCH_USER_SUCCESS":
            return{
                ...state,
                isLoading: false,
                id:action.payload.id,
                fullname: action.payload.fullname,
                username: action.payload.username
            }
        case "FETCH_ALL_POSTS_START":
            return{
                ...state,
                isLoading: true
            }
        case "FETCH_ALL_POSTS_SUCCESS":
            return {
                ...state,
                blogs: action.payload,
                isLoading:false
            }
        case "ADD_NEW_POST_START":
            return{
                ...state,
                isLoading: true,
            }
        case "ADD_NEW_POST_SUCCESS":
            return{
                ...state,
                isLoading: false,
            }
        case "ADD_NEW_POST_FAILURE":
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        default:
            return state;
    }
}