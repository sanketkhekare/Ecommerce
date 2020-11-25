import React from 'react';
import {connect} from 'react-redux';
import {fetchProducts,fetchCategories} from '../actions/Products';
import {getProducts} from '../selectors/Products';
import {Link} from 'react-router';
import R from 'ramda';
import {loadMore,addProductToBasket} from '../actions/Products';

import '../Containers/myntras.css';

class Products extends React.Component{

    componentDidMount(){
        this.props.fetchProducts();
        this.props.fetchCategories();
    }

    renderProduct = (product,index)=>{
        const {addProductToBasket} = this.props;
        // const shortDesc = `${R.take(60,product.description)}...`;
        return (
        

            <div align="">
            <div className="search-searchProductsContainer row-base"  key={index}>
                
                {/* <div className="">
                    <img className='img-responsive'
                        src={product.image}
                        alt={product.name}
                    />

                </div>
                <div className="">
                 
                </div> */}

                    <div className="results-base">

                        <div className="product-base">
                            <div class="product-thumbShim"/>
                            
                          <div className="product-imageSliderContainer">
                              
                              <div className="product-sliderContainer">
                                      <div className="" >
                                          
                                              <div className="element_style2">
                                                  <picture className="img-responsive">
                                                      <img src={product.image} className="img-responsive"/>
                                                  </picture>
                                              </div>

                                      </div>
                              </div>
                              
                          </div>
                          
                          <div className="product-productMetaInfo">
                              <h3 className="product-brand">{product.vendor}</h3>
                              <h4 className="product-product">{product.name}</h4>
                              <h4 className="product-sizes">
                                Size:<span className="product-sizeNoInventoryPresent">US8 US9 US10 US 11 </span>
                              </h4>
                              <div className="product-price">
                                  <div className="product-discountedPrice">
                                   $ {product.price}
                                    <span className="product-strike">
                                        $ {product.compare_at_price}
                                  </span>
                                   <span className="product-discountPercentage">
                                       ({ "  %OFF"})
                                   </span>
                                  </div>
                                  
                              </div>
                          </div>
                            

                          <div className="product-actions ">
                              <span  style={{textAlign:"center",width:"100%"}} onClick={()=>addProductToBasket(product.id)} className="product-actionsButton product-wishlistproduct-actionsButton product-wishlist">
                                    Add to Cart
                                    
                              </span>

                          </div>
                        </div>
                    </div>
                 
            </div>
</div>




        );
    };

    render(){
        const {products,loadMore} = this.props;
        return(
        <div>
             <div className="books row">
                {products.map((product,index)=>{
                    return this.renderProduct(product,index);
                })}
            </div> 
          
        </div>            
       
        )};
};

const mapDispatchToProps = (dispatch)=>({
    fetchProducts: ()=>dispatch(fetchProducts()),
    loadMore: ()=>dispatch(loadMore()),
    addProductToBasket: (id)=>dispatch(addProductToBasket(id)),
    fetchCategories: ()=>dispatch(fetchCategories())
});
//ownProps are available here because this component is defined directly on route.
//child componenets must include compose withRoutes
const mapStateToProps = (state,ownProps)=>({
    products: getProducts(state,ownProps)
});

export default connect(mapStateToProps,mapDispatchToProps)(Products);