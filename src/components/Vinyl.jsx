import { useState } from "react";
import allAlbums from "../api/allAlbumsData";
import "../styles/Vinyl.css";

function Vinyl({ URL, albumName, cart, modifyCart }) {
    const [quantity, setQuantity] = useState(1);
    const albumID = allAlbums.find(album => album.name === albumName).albumID;
    const albumObj = {
        id: crypto.randomUUID(),
        name: albumName,
        albumID: albumID,
        quantity: quantity,
    }

    const handleAddQuantityClick = () => {
        setQuantity(lastQuantity => lastQuantity + 1);
    }

    const handleRemoveQuantityClick = () => {
        setQuantity(lastQuantity => lastQuantity - 1);
    }

    const handleAddToCart = () => {
        const newCart = [...cart, albumObj];
        modifyCart(newCart);
    }

    return (
        <div className="vinyl-item">
            <img src={URL}/>
            <p>{albumName}</p>
            <button onClick={handleAddQuantityClick}>+</button>
            <button onClick={handleRemoveQuantityClick}>-</button>
            <button onClick={handleAddToCart}>Add to cart</button>
            <p>{quantity}</p>
        </div>
    )
}

export default Vinyl;