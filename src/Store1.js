
import rootReducers from "./Reducers/Index";
import { legacy_createStore } from 'redux'
import { createStoreHook } from "react-redux";
const store=createStoreHook(rootReducers)
export default store
