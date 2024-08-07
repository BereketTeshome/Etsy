import React from "react";
import ProductsHeader from "../components/ProductsHeader";
import Header from "../components/Header";
import Products from "../components/Products";
import MainProducts from "../components/MainProducts";
const HomePage = () => {
  return (
    <>
      <Header />
      <ProductsHeader />
      <Products />
      <MainProducts />
    </>
  );
};

export default HomePage;
