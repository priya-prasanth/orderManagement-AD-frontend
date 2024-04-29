import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userListReducer, userLoginReducer } from "./Reducers/userReducers";
import {
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
  productListReducer,
  productUpdateReducer,
} from "./Reducers/ProductReducers";
import { orderDeliveredReducer, orderDetailsReducer, orderListReducer } from "./Reducers/OrderReducers";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productEdit: productEditReducer,
  productUpdate: productUpdateReducer,
  orderList: orderListReducer,
  orderDetails: orderDetailsReducer,
  orderDeliver:orderDeliveredReducer,
});


// login
const userInfoFromLocalStorage = localStorage.getItem("userinfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

export const store = configureStore({ reducer }, initialState);

// export default store;
