import api from "./axiosApiConfig";

// ---------- login user
export const loginUser = (userInfo) => {
  return api.post("/auth/login", userInfo);
};

export const getCurrentUser = (token)=>{
    return api.get('/auth/getCurrentUser' , {
      headers:{
        "Content-Type":"application/json",
        Authorization:token
      }
    })
}