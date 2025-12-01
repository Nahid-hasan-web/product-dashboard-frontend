import api from "./axiosApiConfig"

export const productApi = {
    // --- add product
    addProduct:(productData)=>{
       return api.post('http://localhost:8000/product/addProduct' , productData)
    },
    // --- get product
    getProducts:(limitAndPage)=>{
        return api.get(`http://localhost:8000/product/getProduct?limit=${limitAndPage.limit}&page=${limitAndPage.page}`)
    }
}


