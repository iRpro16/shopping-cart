import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Vinyl from "./Vinyl";
import "../styles/DisplayGenre.css";

function DisplayGenre() {
    const {albums, vinyls, setVinyls} = useOutletContext();
    const { genre } = useParams();
    const albumGenre = albums.filter(album => album.genre === genre);

    return (
        <div className="album-genre-display">
            {albumGenre?.map(album => (
                <div key={album.id} className="display-albums-genre">
                    <Vinyl 
                        URL={album.url} 
                        albumName={album.name} 
                        cart={vinyls}
                        modifyCart={setVinyls}/>
                </div>
            ))}
        </div>
    )
}

export default DisplayGenre;