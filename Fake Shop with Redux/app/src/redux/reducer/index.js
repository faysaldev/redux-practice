import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import userReducer from './userReducer'


const allReducer = combineReducers({
    counter:counterReducer,
    user:userReducer,
})

export default allReducer;