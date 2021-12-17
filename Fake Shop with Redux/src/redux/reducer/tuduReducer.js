const initialState={
    tudus:[],
}

const tuduReducer=(state = initialState,action)=>{
    switch(action.type){
        case 'SET_TUDUS':
        return {
            ...state,
            tudus:action.payload,
        }
        break;

        default:
        return state;
        break;
    }
}

export default tuduReducer;