const loginReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_USER': 
        return action.payload
        default:
            return null;
    }
}

export default loginReducer;