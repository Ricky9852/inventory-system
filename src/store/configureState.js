import {createStore,combineReducers} from 'redux'
import  { inventoryReducer, cartReducer } from '../reducers/inventoryReducer'


const configureState=()=>{
    const store=createStore(combineReducers({
        inventory:inventoryReducer,
        cart:cartReducer
    }))
    return store
}


export default configureState