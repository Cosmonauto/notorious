import { IconButton, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { chocolateContext } from "../../context/ChocolateContext";
import MainLayout from "../../Layouts/MainLayout";
import ProductSlider from "./components/ProductSlider";
import classes from "./productDetail.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useConfirm } from "material-ui-confirm";
import { notifySuccess } from "../../helpers/notifiers";

export default function ProductDetailPage() {

    const { fetchProductDetail, productDetail, deleteProduct } =
        useContext(chocolateContext);

    const { id } = useParams();
    const confirm = useConfirm();
    const history = useHistory();

    useEffect(() => {
        fetchProductDetail(id);
    }, [id]);

    const handleProductDelete = () => {
        confirm({
            description: 'Удалить данный товар?',
        }).then(() => {
            deleteProduct(id).then(() => {
                notifySuccess('Товар был успешно удален!');
                history.push('/');
            });
        });
    };

    return (
        <MainLayout>
            {productDetail && (
                <div className={classes.container}>
                    <ProductSlider images={productDetail.images} />

                    <div>
                        <IconButton onClick={handleProductDelete}>
                            <DeleteIcon />
                        </IconButton>

                        <IconButton onClick={() => history.push(`/products/${id}/update`)}>
                            <EditIcon />
                        </IconButton>
                    </div>

                    <Typography variant="h3">{productDetail.title}</Typography>
                    <Typography variant="h3">{productDetail.price}</Typography>
                    <Typography variant="body1">{productDetail.description}</Typography>
                </div>
            )}
        </MainLayout>
    )
};