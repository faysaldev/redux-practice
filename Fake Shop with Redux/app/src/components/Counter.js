import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,addUser,delteUser} from '../redux/action'

function Counter() {
    const counter = useSelector(state=> state.counter);
    const loginUser = useSelector(state=> state.user);



const dispatch = useDispatch();

const user={
    name:'faysalmridha',
    email:"fmridha166@gmail.com",
    number:'01646177169'
}

    return (
        <div>
            <h1>This is the default Redux store value {counter}</h1>
            <button onClick={()=> dispatch(increment(10))}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>

            <button onClick={()=> dispatch(addUser(user))}>add user</button>

            <button onClick={()=>dispatch(delteUser())}>deleteUser</button>
        </div>
    )
}

export default Counter
