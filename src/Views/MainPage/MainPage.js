import React, { useContext, useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import Cards from "../../components/Cards";
import MainLayout from "../../Layouts/MainLayout";

import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero";
import { chocolateContext } from "../../context/ChocolateContext";
import Feature from "../../components/Feature/index";

export default function MainPage() {
  const { products, fetchProducts, total } = useContext(chocolateContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(page - 1);
  }, [page]);

  return (
    <MainLayout>
      <Hero />
      <ProductsList products={products} />
      <ProductsPagination
        setPage={setPage}
        page={page}
        count={Math.ceil(total / 4)}
      />
      <Feature />
      <Cards />
      <Footer />
    </MainLayout>
  );
}
