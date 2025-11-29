import api from "./axiosApiConfig";

export const catgoryApi = {
  getCagory: () => {
    return api.get("http://localhost:8000/category/getAllCagegory");
  },
};
