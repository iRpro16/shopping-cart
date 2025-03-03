import { useOutletContext } from "react-router-dom";
import Vinyl from "./Vinyl";
import "../styles/DisplayAll.css"

function DisplayAll() {
    const {albums, vinyls, setVinyls} = useOutletContext();

    return (
        <div className="album-genre-display">
            {albums?.map(album => (
                <div key={album.id} className="display-all-albums">
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

export default DisplayAll;