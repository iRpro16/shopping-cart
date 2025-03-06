import { useState } from "react";
import allAlbumsData from "../api/allAlbumsData";
import PropTypes from "prop-types";
import "../styles/Vinyl.css";

function Vinyl({ URL, albumName, cart, modifyCart, allAlbums= allAlbumsData }) {
    const [quantity, setQuantity] = useState(1);
    const [add, setAdd] = useState("Add to cart");
    const albumURL = allAlbums.find(album => album.name === albumName).url;
    const price = allAlbums.find(album => album.name === albumName).price;
    const albumObj = {
        id: crypto.randomUUID(),
        name: albumName,
        url: albumURL,
        quantity: quantity,
        price: price,
    }

    const handleAddQuantityClick = () => {
        setQuantity(lastQuantity => lastQuantity + 1);
    }

    const handleRemoveQuantityClick = () => {
        if (quantity > 1) setQuantity(lastQuantity => lastQuantity - 1);
    }

    const handleAddToCart = () => {
        const albumInCart = cart.find(album => album.name === albumObj.name);
        const newCart = [...cart, albumObj];
        const currentCart = [...cart];
        setAdd("Added ✓");

        if (!albumInCart) {
            modifyCart(newCart);
        } else {
            const newAlbumObj = { ...albumInCart, quantity: albumInCart.quantity + quantity };
            const target = currentCart.find(e => e.name === albumName);
            Object.assign(target, newAlbumObj);
            modifyCart(currentCart);
        }
    }

    return (
        <div className="vinyl-item">
            <img src={URL}/>
            <div className="album-price">
                <p>{albumName}</p>
                <p>${price}</p>
            </div>
            <div className="quantity">
                <p>Quantity: </p>
                <div>
                    <button onClick={handleRemoveQuantityClick}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleAddQuantityClick}>+</button>
                </div>
            </div>
            <button onClick={handleAddToCart}>{add}</button>
        </div>
    )
}

export default Vinyl;

// Vinyl component PropTypes
Vinyl.propTypes = {
    URL: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    cart: PropTypes.array.isRequired,
    modifyCart: PropTypes.func.isRequired
}