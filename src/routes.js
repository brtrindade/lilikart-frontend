import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Index from './pages/Index';
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import Client from './pages/Client'
import ClientList from './pages/ClientList'
import Sale from './pages/Sale'
import SaleList from './pages/SaleList'
import SaleDetails from './pages/SaleDetails'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/product" exact component={Product} />
                <Route path="/product/list" exact component={ProductList} />
                <Route path="/product/:product_id?" exact component={ProductDetails} />
                <Route path="/client" exact component={Client} />
                <Route path="/client/list" exact component={ClientList} />
                <Route path="/sale" exact component={Sale} />
                <Route path="/sale/list" exact component={SaleList} />
                <Route path="/sale/:sale_id/details" exact component={SaleDetails} />
                <Route path="*" component={Index} />
            </Switch>
        </BrowserRouter>
    );
}