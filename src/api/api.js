import * as axios from 'axios'


const baseAxios = axios.create({
   withCredentials: true,
   headers: {
            'API-KEY': 'bab08263-2100-4050-9990-ecee52edc794'
         },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'      

})

export const usersAPI = {
   getUsers (currentPage=1, sizePage=15) {
      return baseAxios.get(`users?page=${currentPage}&count=${sizePage}`).then(response=>response.data )
   },

   postFollow: (id) => baseAxios.post(`/follow/${id}`).then(response=>response.data ), 

   deleteFollow: (id) => baseAxios.delete(`/follow/${id}`).then(response=>response.data)

}

export const profileAPI = {
   getProfile: (id)=>  baseAxios.get(`profile/${id}`).then(response=>response.data),

   getStatus: (id)=> baseAxios.get(`profile/status/${id}`),

   updateStatus: (status)=> baseAxios.put(`profile/status`, {status: status})
}

export const authAPI = {
   getAuthInfo: () => baseAxios.get(`auth/me`).then(response=>response.data),

   postLogin: (email, password, rememberMe) => baseAxios.post('auth/login', {email, password, rememberMe}).then(response=>response.data),

   deleteLogin: ()=> baseAxios.delete('auth/login').then(response=>response.data)
}

