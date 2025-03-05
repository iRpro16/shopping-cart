import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Shop() {
    const {albums, cartItems, setCartItems} = useOutletContext();
    const albumGenres = ["rap", "r&b", "latin", "pop"];
    
    return (
        <div className="shop-component">
            <h1>This is the Shop page!</h1>
            <li><Link to="/shop">all</Link></li>
            {albumGenres.map(genre => {
                return (
                    <li key={crypto.randomUUID()}><Link to={genre}>{genre}</Link></li>
                )
            })}
            {albums === null || albums.length == 0 ? (
                <p>There has been a connection error</p>
            ) : (
                <Outlet context={{albums, cartItems, setCartItems}}/>
            )}
        </div>
    );
};

export default Shop;