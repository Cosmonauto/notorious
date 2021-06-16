import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import HeroSlider from "../../components/HeroSlider";
import ProductsList from "../../components/ProductsList";
import { chocolateContext } from "../../context/ChocolateContext";
import MainLayout from "../../Layouts/MainLayout";

export default function BrandPage() {
    const { id } = useParams();
    const { products, fetchBrandProducts, fetchBrandDetail, brandDetail } =
        useContext(chocolateContext);

    useEffect(() => {
        fetchBrandProducts(id);
        fetchBrandDetail(id);
    }, [id]);

    return (
        <MainLayout>
            {products.length && brandDetail && (
                <>

                    <ProductsList products={products} />
                </>
            )}
        </MainLayout>
    );
}
