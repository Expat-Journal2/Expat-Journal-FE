export const initialState = {
    fullname: "gordon caister",
    username: "gordon",
    password: "gordon",
    isLoggedIn: false,
    isLoading: false
}

export const formReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return state;
    }
}