import React from "react";
import SalesStatistics from "./SalesStatistics.jsx";
import ProductsStatistics from "./ProductsStatistics.jsx";
import TopTotal from "./TopTotal.jsx";
import LatestOrder from "./LatestOrder.jsx";

const Main = () => {
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Dashboard</h2>
        </div>
        {/* Top Total */}
        <TopTotal />

        <div className="row">
          {/* STATICS */}
          <SalesStatistics />
          <ProductsStatistics />
        </div>

        {/* LATEST ORDER */}
        <div className="card mb-4 shadow-sm">
          <LatestOrder />
        </div>
      </section>
    </>
  );
};

export default Main;
