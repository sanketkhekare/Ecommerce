import './main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {browserHistory,Router,Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Layout from './Containers/Layout';
import Products from './Containers/Products';
import Product from './Containers/Product';
import Basket from './Containers/Basket';


const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
const jsx = (
    
    <Provider store={store}>
       <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Products}></Route>
                <Route path='/categories/:id' component={Products} />
            </Route>
            <Route path="/Products/:id" component={Product} />
            <Route path="/basket" component={Basket} />
            
       </Router>
    </Provider>
);  




ReactDOM.render(jsx,document.getElementById('root'));

