import {combineReducers} from 'redux'
import productReducer from './productReducer'
import tuduReducer from './tuduReducer'

const allReducer = combineReducers({
    allproduct: productReducer,
    allTudu:tuduReducer,
})

export default allReducer;