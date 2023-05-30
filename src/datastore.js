import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { hotelReducer } from "./hotelReducer/rReducer";


const reducer=combineReducers({
    reducer1:hotelReducer
})

const middleware=[thunk]

const store=createStore(reducer,applyMiddleware(...middleware))

export default store