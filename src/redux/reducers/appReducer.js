import { getAuthInfo } from "./authReducer"

const SET_INITIALIZATION = 'SET_INITIALIZATION'

const initialState = {
  initialization: false
}

const appReducer = (state = initialState, action) => {
   let newState = {...state}
   switch(action.type){
      case SET_INITIALIZATION:
         newState = {
            ...state,
            initialization: true
         }
         break
   }
   return newState
}

export const setInitialization = () => ({type: SET_INITIALIZATION})

export const initializeApp = () => (dispatch)=>{
   let promise = dispatch(getAuthInfo())
   Promise.all([promise]).then( () => dispatch(setInitialization())
   ) 
}


export default appReducer

