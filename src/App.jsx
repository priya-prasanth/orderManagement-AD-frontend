import React, { useEffect } from "react";
import "./App.css";
import "../responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import PrivateRouter from "./PrivateRouter.jsx";

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
    <BrowserRouter>
      <Routes>
        {/* if () */}
        {!userInfo || !userInfo.isAdmin ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/products" element={<ProductScreen />} />
            <Route path="/orders" element={<OrderScreen />} />
            <Route path="/order/:id" element={<OrderDetailScreen />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/users" element={<UsersScreen />} />
            <Route path="/product/:id/edit" element={<ProductEditScreen />} />
          </>
        )}
        {/* <Route exact path="/" element={<PrivateRouter />}>
            <Route exact path="/" element={<HomeScreen />} />
          </Route> */}
        {/* <PrivateRouter path="/" element={<HomeScreen />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
