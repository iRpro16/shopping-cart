import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar({ numberItems }) {
    return (
        <div className="nav-bar">
            <div className="store-header">
                <img src="/vinyl.png" id="vinyl-svg"/>
                <h3>The Vinyl Store</h3>
            </div>

            <ul className="page-links">
                <li>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home</Link>
                </li>
                <li>
                    <Link to="shop" style={{ textDecoration: "none", color: "black"}}>Shop</Link>
                </li>
                <li>
                    <Link to="cart" style={{ textDecoration: "none", color: "black" }}>Cart({numberItems})</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;