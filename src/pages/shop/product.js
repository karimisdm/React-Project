import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";


const Product = (props)=> {
    const {id, productImage, productName, price} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
    
    return(
        <div className="col-3">
            <img src={productImage} alt={productName} className="w-100"/>
            <h5>{productName}</h5>
            <p>price: {price}$</p>
            <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>+</button>
            <span className="mx-1">{cartItems?.filter(row=>row.id === id)[0]?.count || 0}</span>
            <button className="btn btn-info btn-sm" onClick={() => removeFromCart(id)}>-</button>
        </div>
    )
}
export default Product;