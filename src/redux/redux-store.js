import { createStore, combineReducers } from "redux";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";


const reducers = combineReducers({
   profilesPage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer
})

const store = createStore(reducers)

export default store