import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./reducers/appReducer";


const reducers = combineReducers({
   profilesPage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store