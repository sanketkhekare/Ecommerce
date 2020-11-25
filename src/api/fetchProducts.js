import products from './mockProducts';
import R from 'ramda';
import request from 'superagent';
import mockCategories from './mockCategories';

export const fetchProducts = async () =>{
    return new Promise(resolve =>{
        resolve(products);
    });

    // const {body} = await request.get('http://www.mocky.io/v2/5918b9461200001f1040dbeb');
    // return body.phones;
};

export const loadMore = async ({offset}) => {
    return new Promise((resolve)=>{
        resolve(products);
    });
};

export const fetchProductyId = async id=>{
    return new Promise((resolve,reject)=>{
        console.log("Id in api fetchProducts " , id);
        const product = R.find(R.propEq('id',id),products);
        resolve(product);
    });
};

export const fetchCategories = async ()=>{
    return new Promise(resolve =>{
        resolve(mockCategories);
    });
}