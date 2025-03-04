import { useState } from "react";
import allAlbums from "../api/allAlbumsData";
import "../styles/Vinyl.css";

function Vinyl({ URL, albumName, cart, modifyCart }) {
    const [quantity, setQuantity] = useState(1);
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
                <p>{price}</p>
            </div>
            <div className="quantity">
                <p>Quantity: </p>
                <div>
                    <button onClick={handleRemoveQuantityClick}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleAddQuantityClick}>+</button>
                </div>
            </div>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default Vinyl;