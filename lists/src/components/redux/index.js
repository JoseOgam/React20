import {configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducer/reducer"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let store = configureStore({reducer:rootReducer},composeEnhancers)

export default store;