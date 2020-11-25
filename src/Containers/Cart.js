import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getTotalBasketCount} from '../selectors/Products';
import '../Containers/Layout.css';
import cart from '../../src/assets/images/cart.png';
export const Cart = (props)=>{
    //console.log("Props passed are ", props);
    const {totalBasketCount} = props;
    return(
        <div className="">
            <div className="">
             <Link to="/basket" >   
            <img src={cart} className="cart"  alt="cart"/>
            <span className="cart_circle">{totalBasketCount} </span> 
                
                </Link>
            </div>
        </div>
    );
};

// export default BasketCart;

const mapStateToProps = (state)=>({
    totalBasketCount: getTotalBasketCount(state),
    
});

export default connect(mapStateToProps)(Cart);