import React, { useContext, useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/";
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import { chocolateContext } from "../../context/ChocolateContext";
import MainLayout from "../../Layouts/MainLayout";

import HeroImg from "../../assets/images/hero.jpg";
import HeroImg2 from "../../assets/images/hero2.jpg";

export default function MainPage() {
    const { products, fetchProducts, total } = useContext(chocolateContext);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchProducts(page - 1);
    }, [page]);

    const heroSlider = [
        { src: HeroImg, title: "hero" },
        { src: HeroImg2, title: "hero" },
    ];

    return (
        <MainLayout>
            <HeroSlider slider={heroSlider} />
            <ProductsList products={products} />
            <ProductsPagination
                setPage={setPage}
                page={page}
                count={Math.ceil(total / 4)}
            />
        </MainLayout>
    );
}
