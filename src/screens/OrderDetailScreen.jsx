import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import OrderDetailmain from "../components/orders/OrderDetailmain.jsx";
import { useParams } from "react-router-dom";

const OrderDetailScreen = () => {
   const { id } = useParams();
   const orderId = id;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <OrderDetailmain orderId={orderId} />
      </main>
    </>
  );
};

export default OrderDetailScreen;
