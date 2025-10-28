import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import LayoutOne from "./layouts/LayoutOne";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import AddProductPage from "./pages/AddProductPage";
import ProductPage from "./pages/ProductPage";
import AllProductPage from "./pages/AllProductPage";
import ManageProduct from "./pages/manageProduct";
import OrderPage from "./pages/OrderPage";
const App = () => {

  
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/addProduct" element={<AddProductPage />} />
          <Route path="/allProduct" element={<AllProductPage />} />
          <Route path="/manage-prouduct" element={<ManageProduct />} />
          <Route path="/all-orders" element={<OrderPage/>} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;
