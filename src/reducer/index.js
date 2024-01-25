import { combineReducers } from "redux";
import crudReducer from "./crudreducer";

const root = combineReducers({
    crud : crudReducer
})
export default root;