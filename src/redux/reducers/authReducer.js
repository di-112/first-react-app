import { stopSubmit } from "redux-form"
import { authAPI } from "../../api/api"

const SET_AUTH_INFO = 'SET_AUTH_INFO'
const SET_IS_FETCHING = 'SET_IS_FETCHING'



const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false, 
  isFetching: false
}

const authReducer = (state = initialState, action) => {
   let newState = {...state}
   switch(action.type){
      case SET_AUTH_INFO:
         newState = {
            id: action.data.id, 
            email: action.data.email,
            login: action.data.login,
            isAuth: action.data.isAuth,
         }
         break
      case SET_IS_FETCHING:
         newState.isFetching = action.isFetching
      default: return newState
   }
   return newState
}

export const setAuthInfo = (data) => ({type: SET_AUTH_INFO, data})

export const setIsFetching= (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export const getAuthInfo = () => (dispatch)=>{
   return authAPI.getAuthInfo().then((data)=>{
      if(data.resultCode===0) dispatch(setAuthInfo({...data.data, isAuth: true}))
    })
}


export const postLogin = (email, password, rememberMe) => (dispatch) => {
   //dispatch(setIsFetching(true))
   authAPI.postLogin(email, password, rememberMe).then(data=>{
      if(data.resultCode === 0) dispatch(getAuthInfo())
      else{
         let message = data.messages.length>0?data.messages[0]:'some error'
         dispatch(stopSubmit('loginForm', {_error: message}))
      }
      //dispatch(setIsFetching(false))
   })
}

export const deleteLogin = () => (dispatch) => {
   dispatch(setIsFetching(true))
   authAPI.deleteLogin().then(data=>{
      if(data.resultCode === 0) dispatch(setAuthInfo({id:null,email:null,login:null, isAuth:false}))
      dispatch(setIsFetching(false))
   })
}



export default authReducer

