import {createStore, combineReducers} from 'redux'
import reducer from './reducer'

// const reducers = combineReducers({reducer})

export default createStore(reducer)