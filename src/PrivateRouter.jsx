import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const PrivateRouter = ({ element: Element, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo || !userInfo.isAdmin) {
    return <Navigate to="/login" replace />;
  }
  return <Route {...rest} element={<Element />} />;
};

export default PrivateRouter;
