import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import allAlbums from "../api/allAlbumsData";
import concatStringIDS from "../utils/concatStrings";
import Vinyl from "./Vinyl";

function DisplayAll() {
    const {token, vinyls, setVinyls} = useOutletContext();
    const [albums, setAlbums] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    let albumIDSArray = allAlbums.map(album => album.albumID);
    let albumIDS = concatStringIDS(albumIDSArray);

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/albums?ids=${albumIDS}`, {
            method: "get",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then((response) => {
            if (response.status === 429) {
                const retryAfter = response.headers.get("Retry-After");
                console.warn(`Rate limited. Retry after ${retryAfter} seconds`);
            } else {
                return response.json();
            }
        })
        .then((data) => setAlbums(data.albums))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [token, albumIDS]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className="album-genre-display">
            {albums?.map(album => (
                <div key={album.id} className="display-all-albums">
                    <Vinyl 
                        URL={album.images[0].url} 
                        albumName={album.name}
                        cart={vinyls} 
                        modifyCart={setVinyls}/>
                </div>
            ))}
        </div>
    )
}

export default DisplayAll;