import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import logIn_icon from '../Assets/LogIn.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
const Navbar = () => {
  const { Count } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Mens</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Womens</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='./login'><img className='UserInput' src={logIn_icon} alt='' /></Link>
        <Link to='./cart'><img src={cart_icon} alt='' /></Link>
        <div className='nav-cart-count'>{Count}</div>
      </div>
    </div>
  )
}

export default Navbar
