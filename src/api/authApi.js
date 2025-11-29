import api from "./axiosApiConfig"


// ---------- login user 
export const loginUser = (userInfo)=>{
    
    return api.post('/auth/login' , userInfo)
}


