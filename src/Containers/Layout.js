import React from 'react';
import {SideBar} from './SideBar';
 import '../Containers/Layout.css';
import logo from '../../src/assets/images/logo.svg'
import searchbox from '../../src/assets/images/Vector.png';
import user from '../../src/assets/images/user.png';
import cart from '../../src/assets/images/cart.png';
//import 'bulma/css/bulma.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BasketCart } from './BasketCart';
// import 'mdbreact/dist/css/mdb.css';
// import './components/mdb.ecommerce.min.css';
import Cart from './Cart';
import Categories from './Categories';

const Layout = ({children})=>{
    return (

        
    <div>

             
            <nav className="navbar navbar-expand-lg navbar-white bg-white">
  <a className="" href="#">
    <img src={logo} className=""  alt=""/>
  </a>
       <div className="mx-auto">
         <a href="#" className="Ag">Shop</a>
         <a href="#" className="Ag">About Us</a>
         <a href="#"className="Ag">Our Stores</a>
         <a href="#"className="Ag">Contact Us</a>
       </div>
     
       <div className="">
         <img src={searchbox} className="searchbar" alt="search"/>
         <img src={user} className="user" alt="user_profile"/>
         {/* <img src={cart} className="cart" alt="cart"/> */}
         
         <div className="cart_pos">
         <Cart/>
         </div>
         {/* <div className="cart_circle">2</div> */}
             

         
       </div>
      
</nav> 

<div className="Rectangle2">
  <span className="inviteText">Invite friends to Big Fashion Festival & get up to $150 MynCash for every person who visits</span>
  
  <button className="inviteButton">Invite Now</button>
  
  </div>

<p/><p>Home/Clothing/Mens Clothing/<strong>All Mens Clothing</strong></p>
<p/>
<p style={{fontSize:"20px"}}><strong>All Products</strong></p>
{/* <span className="">FILTERS:-    </span> */}


<Categories/>
{/* <button className="button_filter">All Products</button>
<button className="button_filter">T shirt</button>
<button className="button_filter">Denim</button>
<button className="button_filter">Sweatshirt</button>
<button className="button_filter">Polo T Shirt</button>
<button className="button_filter">Shirt</button> */}
<hr/>
        <div className=" ">
            
            <div className="">   
                <div className="">
                 
                    <div>
                         {/* <SideBar/>  */}
                    </div>
                    <div className="">
                        {children}
                    </div>
                </div>
            </div>
            </div>
            </div>
    
    )
};

export default Layout;