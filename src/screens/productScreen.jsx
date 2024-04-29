import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import MainProducts from "../components/products/MainProducts.jsx";

const ProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts />
      </main>
    </>
  );
};

export default ProductScreen;
