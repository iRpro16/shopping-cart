import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useOutletContext } from "react-router-dom";
import React from "react";
import "../styles/Shop.css";

function Shop() {
    const {albums, cartItems, setCartItems} = useOutletContext();
    const albumGenres = ["rap", "r&b", "latin", "pop"];
    
    return (
        <>
            <div className="shop-component">
            <div className="all-links">
                <li>
                    <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>all</Link>
                </li>
                {albumGenres.map((genre) => (
                    <React.Fragment key={crypto.randomUUID()}>
                        {" / "}
                        <Link to={genre} style={{ textDecoration: "none", color: "black" }}>{genre}</Link>
                    </React.Fragment>
                ))}
            </div>
                {albums === null || albums.length == 0 ? (
                    <p>There has been a connection error</p>
                ) : (
                    <Outlet context={{albums, cartItems, setCartItems}}/>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Shop;