import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Nav = ()=>{
    const {cartItems} = useContext(ShopContext);
    const totalItems = cartItems?.reduce((pre, current)=> {return pre + current.count}, 0);
   
    return(
        <div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container">
                <a href="/" className="navbar-brand">Online Shop</a>
                <ul className="navbar-nav">
                    <li>
                        <Link to={"/"} className="nav-link">Shop</Link>
                    </li>
                    <li>
                        <Link to={'/cart'} className="nav-link">
                         <FontAwesomeIcon icon={faShoppingCart}/>
                         {totalItems>0 && <span>{totalItems}</span>}
                        </Link>
                    </li>

                </ul>

            </div>

        </div>
    )
}
export default Nav;