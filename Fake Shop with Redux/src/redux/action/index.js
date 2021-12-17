export const allProducts=(payload)=>{
    return{
        type: 'ALL_PRODUCTS',
        payload: payload,
    }
}

export const selectedProducts=(payload)=>{
    return{
        type:"SELECTED_PRODUCT",
        payload: payload,
    }
}

export const DeleteProduct=(payload)=>{
    return{
        type:"DELETE_PRODUCT"
    }
}

export const setTudus=(payload)=>{
    return{
        type:"SET_TUDUS",
        payload: payload,
    }
}