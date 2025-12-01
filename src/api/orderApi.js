import api from "./axiosApiConfig"

export const orderApi = {
    getOrderList : ()=>{
        return api.get(`http://localhost:8000/order/get-orders?filter=all`)
    },
}


