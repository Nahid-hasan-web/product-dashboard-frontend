import api from "./axiosApiConfig"


// ---------- login user 
export const loginUser = (userInfo)=>{
    console.log(userInfo)
    return api.post('/auth/login' , userInfo)
}


