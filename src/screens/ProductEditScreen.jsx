import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import EditproductMain from "../components/products/EditproductMain.jsx";

const ProductEditScreen = () => {
  const { id } = useParams();
  const productId = id
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <EditproductMain productId={productId} />
      </main>
    </>
  );
};

export default ProductEditScreen;
