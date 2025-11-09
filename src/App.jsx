import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import LayoutOne from "./layouts/LayoutOne";
import AddProductPage from "./pages/AddProductPage";
import ProductPage from "./pages/ProductPage";
import AllProductPage from "./pages/AllProductPage";
import ManageProduct from "./pages/manageProduct";
import OrderPage from "./pages/OrderPage";
import ClientsListPage from "./pages/ClientsListPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
const App = () => {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/addProduct" element={<AddProductPage />} />
          <Route path="/allProduct" element={<AllProductPage />} />
          <Route path="/manage-prouduct" element={<ManageProduct />} />
          <Route path="/all-orders" element={<OrderPage />} />
          <Route path="/client-list" element={<ClientsListPage />} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    )
  );
  return (
    <>
    <ToastContainer/>
      <RouterProvider router={myRoute} />
    </>
  );
};

export default App;
