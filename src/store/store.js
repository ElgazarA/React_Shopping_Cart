import { applyMiddleware , compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./reducers/reducer";
import {thunk} from 'redux-thunk'
import productsReducer from './reducers/productReducer'
import loginReducer from './reducers/login'
import RegisterReducer from './reducers/register';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose ;
const initState = {}
// const store = createStore(reducer , initState , enhancer(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {  
        login: loginReducer,
        products: productsReducer,
        RegisterReducer
    }
});


export default store;