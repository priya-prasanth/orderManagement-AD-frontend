import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import AddProductMain from "../components/products/AddProductMain.jsx";

const AddProduct = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddProductMain />
      </main>
    </>
  );
};

export default AddProduct;
