import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BrandPage from "./Views/BrandPage/BrandPage";
import MainPage from "./Views/MainPage/MainPage";
import ProductCreatePage from "./Views/ProductCreatePage/ProductCreatePage";
import ProductDetailPage from "./Views/ProductDetailPage/ProductDetailPage";
import ProductUpdatePage from "./Views/ProductUpdatePage/ProductUpdatePage";
import SearchResultPage from "./Views/SearchResultPage/SearchResultPage";
import Cart from "./components/Cart/Cart";
import Signup from "./components/authentication/Signup/Signup";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/authentication/Login/Login";
import ForgotPassword from "./components/authentication/ForgotPassword/ForgotPassword";
import FormPage from "./components/FormOrder/FormPage"
import PaymentForm from "./components/CreditCard/PaymentForm"


export default function Routes() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route path="/signup" component={Signup} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/" component={MainPage} exact />
                    <Route path="/products/create" component={ProductCreatePage} exact />
                    <Route
                        path="/products/search/:searchValue"
                        component={SearchResultPage}
                        exact
                    />
                    <Route path="/products/:id" component={ProductDetailPage} exact />
                    <Route
                        path="/products/:id/update/"
                        component={ProductUpdatePage}
                        exact
                    />
                    <Route path="/brand/:id" component={BrandPage} exact />
                    <Route path="/cart" component={Cart} exact />
                    <Route path="/checkout" component={FormPage} exact />
                    <Route path="/payment" component={PaymentForm} exact />

                    import FormPage from "./components/FormOrder/FormPage";
                    import PaymentForm from "./components/CreditCard/PaymentForm";
                </Switch>
            </AuthProvider>
        </Router>
    );
}
