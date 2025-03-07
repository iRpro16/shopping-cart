import { Link } from "react-router-dom";
import "../styles/EmptyCart.css";

function EmptyCart() {
    return (
        <div className="empty-cart">
            <img src="/shopping-cart.png" id="shopping-cart-svg"/>
            <p>Cart is empty! Fill it up by checking out our vinyls.</p>
            <hr />
            <div><Link to="/shop">Visit our shop</Link></div>
        </div>
    )
}

export default EmptyCart;