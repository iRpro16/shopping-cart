import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Vinyl from "./Vinyl";
import "../styles/DisplayGenre.css";

function DisplayGenre() {
    const {albums, cartItems, setCartItems} = useOutletContext();
    const { genre } = useParams();
    const albumGenre = albums.filter(album => album.genre === genre);

    return (
        <>
            <h3>{genre}</h3>
            <div className="display-albums-genre">
                {albumGenre?.map(album => (
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

export default DisplayGenre;