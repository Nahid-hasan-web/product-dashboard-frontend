import api from "./axiosApiConfig";

export const catgoryApi = {
  getCagory: () => {
    return api.get("/category/getAllCagegory");
  },
  addCategory: ( categoryInfo) => {
    return api.post(
      "/category/addCatagory",
      categoryInfo,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
  },
};
