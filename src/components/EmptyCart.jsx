import { Link } from "react-router-dom";
import "../styles/EmptyCart.css";

function EmptyCart() {
    return (
        <div className="empty-cart">
            <img src="public/shopping-cart.png" id="shopping-cart-svg"/>
            <p>Cart is empty! Fill it up by checking out our vinyls.</p>
            <hr />
            <Link to="/shop">Visit our shop</Link>
        </div>
    )
}

export default EmptyCart;