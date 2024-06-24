import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState } from 'react'



const Navbar = () => {

    const[menu,setMenu]=useState("shop");



  return (

    <div className='navbar'> 
      <div className='nav-logo'>
      <img src={logo} alt="SHOPPER" />
      <p>SHOPPER</p>
      </div>



     <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop {menu==="shop"?<h/>:<></> }</li>
        <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<h/>:<></> }</li>
        <li onClick={()=>{setMenu("womens")}}>Women{menu==="womens"?<h/>:<></> }</li>
        <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<h/>:<></> }</li>
      </ul>

      <div className='nav-logo-cart'>
        <button>Login</button>
        <img src={cart_icon} alt=""></img>
        <div className='nav-cart-count'>0</div>

      </div>



    </div>
  )
}

export default Navbar

/*
used trernary operator to check whether it is from the same grp or not 
 if yes then it will hover 
 */