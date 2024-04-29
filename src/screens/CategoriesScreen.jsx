import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import MainCategories from "../components/Categories/MainCategories.jsx";

const CategoriesScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainCategories />
      </main>
    </>
  );
};

export default CategoriesScreen;
