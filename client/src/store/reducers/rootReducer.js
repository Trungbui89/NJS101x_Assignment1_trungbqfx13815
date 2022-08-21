import { combineReducers } from "redux"
import authReducer from './authReducer'
import fileReducer from "./fileReducer"
import attendanceReducer from './attendanceReducer'


export const reducers = combineReducers({authReducer, fileReducer, attendanceReducer})