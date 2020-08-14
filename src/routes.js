import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Product from './pages/product';

const Routes =() =>(
    //definindo as rotas por um browser
    <BrowserRouter>
    
        {/* permite que uma unica rota seja chamada ao mesmo tempo  */}
        <Switch>
            {/* quando a rota estiver vazia */}
            <Route exact path="/" component={Main}/>
            <Route path="/products/:id" component={Product}/>
        </Switch>
    </BrowserRouter>
)
export default Routes;