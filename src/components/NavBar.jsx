import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <div className="nav-bar">
            <h3>The Vinyl Store</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="shop">Shop</Link></li>
                <li><Link to="cart">Cart</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;