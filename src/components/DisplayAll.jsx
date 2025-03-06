import { useOutletContext } from "react-router-dom";
import Vinyl from "./Vinyl";
import "../styles/DisplayAll.css"

function DisplayAll() {
    const {albums, cartItems, setCartItems} = useOutletContext();

    return (
        <>
            <h3>Browse our selection!</h3>
            <div className="album-all-display">
                {albums?.map(album => (
                    <div key={album.id} className="album-card">
                        <Vinyl 
                            URL={album.url} 
                            albumName={album.name}
                            cart={cartItems} 
                            modifyCart={setCartItems}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default DisplayAll;