import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'




const Navbar = () => {

    const[menu,setMenu]=useState("shop");
    const{getTotalCartItems} =useContext(ShopContext);



  return (

    <div className='navbar'> 
      <div className='nav-logo'>
      <img src={logo} alt="SHOPPER" />
      <p>SHOPPER</p>
      </div>



     <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to="/"> Shop</Link> {menu==="shop"?<h/>:<></> }</li>
        <li onClick={()=>{setMenu("mens")}}><Link to="/mens"> Men</Link>{menu==="mens"?<h/>:<></> }</li>
        <li onClick={()=>{setMenu("womens")}}><Link to="/womens"> Women</Link>{menu==="womens"?<h/>:<></> }</li>
        <li onClick={()=>{setMenu("kids")}}><Link to="/kids"> Kids</Link>{menu==="kids"?<h/>:<></> }</li>
      </ul>

      <div className='nav-logo-cart'>
        <Link to="/login" ><button>Login</button></Link>
        <Link to="/cart" ><img src={cart_icon} alt="/"></img></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>

      </div>



    </div>
  )
}

export default Navbar

/*
used trernary operator to check whether it is from the same grp or not 
 if yes then it will hover 
 */