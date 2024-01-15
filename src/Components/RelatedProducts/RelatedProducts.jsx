import React from 'react'
import './RelatedProducts.css'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
import Item from '../Items/Item'
const RelatedProducts = (props) => {
    const { product } = props;
    const { all_product } = useContext(ShopContext);

    const data_product = [];
    for (let i = 0; i < all_product.length; i++) {
        if (product.id !== all_product[i].id && product.category === all_product[i].category) {
            data_product.push(all_product[i]);
        }
        if (data_product.length >= 4) break;
    }
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1><hr />
            <div className="relatedproducts-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
