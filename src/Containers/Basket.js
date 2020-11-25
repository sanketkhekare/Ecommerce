import React from 'react';
import {connect} from 'react-redux';
import { getTotalBasketPrice,getBasketProductsWithCount } from '../selectors/Products';
import R from 'ramda';
import {removeProductFromBasket,cleanBasket,basketCheckout} from '../actions/Products';
import {Link} from 'react-router';

const Basket = ({products,totalPrice,
                removeProductFromBasket,cleanBasket,
                basketCheckout})=>{
    // console.log(phones);
    // console.log(totalPrice);
    const isBasketEmpty = R.isEmpty(products);
    const renderContent = () => {
        return (
            <div>
                {isBasketEmpty && <div> Your shopping cart is empty </div>}
                <div className="table-responsive">
                    <table className="table-bordered table-striped table-condensed cf">
                        <tbody>
                            {products.map((product,index)=>(
                                <tr key={index}
                                    className="item-checout">
                                    <td className="first-column-checkout">
                                        <img className="img-thumbnail"
                                            src={product.image}
                                            alt={product.name}  
                                        />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.count}</td>
                                    <td>
                                        <span className="delete-cart"
                                        onClick={()=>removeProductFromBasket(product.id)}></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {
                    R.not(isBasketEmpty) &&
                    <div className="row">
                        <div className="pull-right total-user-checkout">
                            <b>Total:</b>
                            ${totalPrice}
                        </div>
                    </div>
                }
            </div>
            )
        };

        const renderSidebar = ()=>{
            return(
                <div>   
                    <Link
                        className="btn btn-info"
                        to="/"
                    >
                    <span className="glyphicon glyphicon-info-sign"/>
                    <span> Continue Shopping</span>
                    </Link>
                    {
                        R.not(isBasketEmpty) &&
                        <div>
                            <button className="btn btn-danger"
                                    onClick={()=>cleanBasket()}        
                            >
                            <span className="glyphicon glyphicon-trash"/>
                            Clean Cart
                            </button>
                            <button
                                className="btn btn-success"
                                onClick={()=>basketCheckout(products)}
                            >
                            <span className="glyphicon glyphicon-envelope"/>
                            Checkout
                            </button>
                        </div>
                    }
                </div>
            );
        };

    return(
        <div className="view-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        {renderContent()}
                    </div>
                    <div className="col-md-3 btn-user-checkout">
                        {renderSidebar()}
                    </div>
                </div>
            </div>
        </div>
    );
    };


const mapStateToProps = (state)=>({
    products: getBasketProductsWithCount(state),
    totalPrice: getTotalBasketPrice(state)
});

const mapDispatchToProps = (dispatch)=>({
    removeProductFromBasket: (id)=>dispatch(removeProductFromBasket(id)),
    cleanBasket: ()=>dispatch(cleanBasket()),
    basketCheckout: (products)=>dispatch(basketCheckout(products))
});

export default connect(mapStateToProps,mapDispatchToProps)(Basket);