import React from "react";
import SalesStatistics from "./SalesStatistics.jsx";
import TopTotal from "./TopTotal.jsx";
import LatestOrder from "./LatestOrder.jsx";
import { useSelector } from "react-redux";

const Main = () => {
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Dashboard</h2>
        </div>
        {/* Top Total */}
        <TopTotal orders={orders} products={products} />

        <div className="row">
          {/* STATICS IMAGE */}
          <SalesStatistics />
          {/* <img
            style={{ width: "200%", height: "350px", objectFit: "contain" }}
            src="src/assets/images/statistics.jpg"
          /> */}
          
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder orders={orders} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default Main;
