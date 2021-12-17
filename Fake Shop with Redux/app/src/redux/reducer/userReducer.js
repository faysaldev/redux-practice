const initialState={
    loginUser:null
}

const userReducer=(state = initialState,action)=>{
    switch(action.type){
        case 'LOGIN_USER':
        return {
            ...state,
            loginUser:action.payload,
        }
        break;
        case "DELTE_USER":
        return {
            ...state,
            loginUser:null,
        }
        break;

        default:
        return state;
        break;
    }
}

export default userReducer;