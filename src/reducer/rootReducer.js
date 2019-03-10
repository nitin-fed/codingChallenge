import { combineReducers } from 'redux'

import success from './successReducer';
import {productReducer} from  './productReducer'

export default combineReducers({
    sucess: success, 
    productReducer: productReducer
})

 