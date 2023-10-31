import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'
import { Link } from 'react-router-dom'
const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <Link to={`/product/${e.id}`}><img onClick={window.scroll(0, 0)} src={e.image} alt="" className="carticon-product-icon" /></Link>
                            <p>{e.name}</p>
                            <p> ${e.new_price}</p>
                            <p>{cartItems[e.id]}</p>
                            <p> ${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default CartItems