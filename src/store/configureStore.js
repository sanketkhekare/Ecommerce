import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import productReducer from '../reducers/product';
import ProductsPage from '../reducers/ProductsPage';
import ProductPage from '../reducers/ProductPage';
import {routerReducer} from 'react-router-redux';
import Basket from '../reducers/Basket';
import Categories from '../reducers/Categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers({
            routing:routerReducer,
            product: productReducer,
            ProductsPage: ProductsPage,
            ProductPage: ProductPage,
            Basket:Basket,
            Categories: Categories
        }),composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};