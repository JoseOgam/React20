import {createStore } from '@reduxjs/toolkit'
import taskReducer from "./reducer/reducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = createStore(taskReducer,composeEnhancers)

export default store;