import React from "react";
import { Products } from "../../data/products";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import Product from "../shop/product";
const Cart = ()=>{
    const {cartItems} = useContext(ShopContext)
    return(
        <React.Fragment>
        <h1>Your Cart Items</h1>
        <div className="row">
          {
            Products.map((product)=>{
                if(cartItems?.find(cartItem => cartItem.id === product.id && cartItem.count > 0))
                    return <Product data={product}/>
                else
                    return null;    
            })
          }

        </div>
        </React.Fragment>
    )
}
export default Cart;