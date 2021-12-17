export const increment=(number)=>{
    return{
        type: 'INCREMENT',
        payload:number
    }
}


export const decrement=()=>{
    return{
        type: 'DECREMENT'
    }
}

export const addUser=(user)=>{
    return{
        type:'LOGIN_USER',
        payload:user,
    }
}

export const delteUser=()=>{
    return{
        type:'DELTE_USER'
    }
}