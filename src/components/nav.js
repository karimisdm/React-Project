import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Nav = ()=>{
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
                        </Link>
                    </li>

                </ul>

            </div>

        </div>
    )
}
export default Nav;