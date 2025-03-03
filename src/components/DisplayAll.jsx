import { useOutletContext } from "react-router-dom";
import Vinyl from "./Vinyl";
import "../styles/DisplayAll.css"

function DisplayAll() {
    const {albums, cartItems, setCartItems} = useOutletContext();

    return (
        <div className="album-genre-display">
            {albums?.map(album => (
                <div key={album.id} className="display-all-albums">
                    <Vinyl 
                        URL={album.url} 
                        albumName={album.name}
                        cart={cartItems} 
                        modifyCart={setCartItems}/>
                </div>
            ))}
        </div>
    )
}

export default DisplayAll;