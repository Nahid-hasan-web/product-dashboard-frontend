import api from "./axiosApiConfig";

export const orderApi = {
  getOrderList: (startDate, endDate) => {
    const params = { filter: "all" };

    if (startDate && endDate) {
      params.startDate = startDate;
      params.endDate = endDate;
    }
    return api.get("http://localhost:8000/order/get-orders", { params });
  },
  getcustomerList:()=>{
    return api.get('http://localhost:8000/order/get-cutomer-list')
  }
};
