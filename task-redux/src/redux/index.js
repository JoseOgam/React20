import { createStore } from 'redux'
import reducerFn from './reducer';

let store = createStore(reducerFn,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;