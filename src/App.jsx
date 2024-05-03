import React, { useEffect } from "react";
import "./App.css";
import "../responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./Redux/store.js";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/productScreen.jsx";
import OrderScreen from "./screens/OrderScreen.jsx";
import OrderDetailScreen from "./screens/OrderDetailScreen.jsx";
import AddProduct from "./screens/AddProduct.jsx";
import UsersScreen from "./screens/UsersScreen.jsx";
import ProductEditScreen from "./screens/ProductEditScreen.jsx";
import Login from "./screens/LoginScreen.jsx";
import NotFound from "./screens/NotFound.jsx";
import { listProducts } from "./Redux/Actions/ProductActions.js";
import { listOrders } from "./Redux/Actions/OrderActions.js";
import Register from "./screens/Register.jsx";
import PrivateRouter from "../PrivateRouter.js";

const App = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <PrivateRouter path="/" element={<HomeScreen />} />
          <PrivateRouter path="/products" element={<ProductScreen />} />
          <PrivateRouter path="/register" element={<Register />} />
          <PrivateRouter path="/orders" element={<OrderScreen />} />
          <PrivateRouter path="/order/:id" element={<OrderDetailScreen />} />
          <PrivateRouter path="/addproduct" element={<AddProduct />} />
          <PrivateRouter path="/users" element={<UsersScreen />} />
          <PrivateRouter
            path="/product/:id/edit"
            element={<ProductEditScreen />}
          />
          <Route path="/login" element={<Login />} />
          <PrivateRouter path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
