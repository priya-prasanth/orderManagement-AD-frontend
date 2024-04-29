import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import OrderMain from "../components/orders/OrderMain.jsx";

const OrderScreen = () => {
 
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderMain  />
      </main>
    </>
  );
};

export default OrderScreen;
