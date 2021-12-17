const initialState={
    products:[],
    product:{}
}

const productReducer=(state = initialState,action)=>{
    switch(action.type){
        case 'ALL_PRODUCTS':
        return {
            ...state,
            products:action.payload,
        }
        break;
        case "SELECTED_PRODUCT":
        return {
            ...state,
            product:action.payload,
        }
        break;

        case "DELETE_PRODUCT":
            return {
                product:{},
            }
            break;

        default:
        return state;
        break;
    }
}

export default productReducer;