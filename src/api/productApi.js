import api from "./axiosApiConfig"

export const productApi = {
    addProduct:(productData)=>{
       return api.post('http://localhost:8000/product/addProduct' , productData)
    }
}


