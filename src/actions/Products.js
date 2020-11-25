import {fetchProducts as fetchProductsApi,
        loadMore as loadMoreApi,
        fetchProductById as fetchProductByIdApi,
        fetchCategories  as fetchCategoriesApi}  from '../api/fetchProducts';
import {getRenderedProductsLength} from '../selectors/Products';

export const fetchProducts = ()=>{
    
    return async (dispatch) => {
        try{
            dispatch({
                type: 'FETCH_PRODUCT_START'
            });
            const products = await fetchProductsApi();
            dispatch({
                type: 'FETCH_PRODUCT_SUCCESS',
                payload: products
            });
        }catch(err){
            dispatch({
                type: 'FETCH_PRODUCT_FAIL',
                payload: err,
                error: true
            });
        };
    };
};

export const fetchCategories = ()=>{
    
    return async (dispatch,getState)=>{
        // console.log("Fetching entire state ", getState());
        try{
            dispatch({
                type: 'FETCH_CATEGORIES_START'
            });
            const categories = await fetchCategoriesApi();
            dispatch({
                type: 'FETCH_CATEGORIES_SUCCESS',
                payload: categories
            });
        }catch(err){
            dispatch({
                type: 'FETCH_CATEGORIES_FAILURE',
                payload: err,
                error: true
            });
        };
    };
}; 

export const loadMore = ()=>{
    
    return async (dispatch,getState) => {
        const offset = getRenderedProductsLength(getState());
        try{
            dispatch({
                type: 'LOAD_MORE_START'
            });
            const products = await loadMoreApi({offset});
            dispatch({
                type: 'LOAD_MORE_SUCCESS',
                payload: products
            });
        }catch(err){
            dispatch({
                type: 'LOAD_MORE_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

export const fetchProductById = id=>{
    return async (dispatch,getState) => {
        const offset = getRenderedProductsLength(getState());
        try{
            dispatch({
                type: 'FETCH_PRODUCT_BY_ID_START'
            });
            const product = await fetchProductByIdApi(id);
            dispatch({
                type: 'FETCH_PRODUCT_BY_ID_SUCCESS',
                payload: product
            });
        }catch(err){
            dispatch({
                type: 'FETCH_PRODUCT_BY_ID_FAILURE',
                payload: err,
                error: true
            });
        };
    };
};

export const addProductToBasket = id => dispatch => {
    dispatch({
        type: 'ADD_PRODUCT_TO_BASKET',
        payload: id
    });
};

export const searchProduct = text => dispatch =>{
    console.log("searching ", text);
    dispatch({
        type: 'SEARCH_PRODUCT',
        payload: text
    })};

export const removeProductFromBasket = (id)=> async dispatch =>{
    dispatch({
        type: 'REMOVE_PRODUCT_FROM_BASKET',
        payload: id
    });
};   

export const cleanBasket = ()=>dispatch => {
    dispatch({
        type: 'CLEAN_BASKET'
    });
};

export const basketCheckout = (products)=> () =>{
    alert(JSON.stringify(products));
};