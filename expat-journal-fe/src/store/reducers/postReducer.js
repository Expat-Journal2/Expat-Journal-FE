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
                id:action.id,
                fullname: action.fullname,
                username: action.username
            }
        case "FETCH_ALL_POSTS_START":
            return{
                ...state,
                
            }
        default:
            return state;
    }
}