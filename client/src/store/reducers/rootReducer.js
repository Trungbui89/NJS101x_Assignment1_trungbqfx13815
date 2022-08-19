import { combineReducers } from "redux"
import authReducer from './authReducer'
import fileReducer from "./fileReducer"

export const reducers = combineReducers({authReducer, fileReducer})