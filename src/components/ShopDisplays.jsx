import { useParams } from "react-router-dom";
import albumGenres from "../api/shopData";
import { useOutletContext } from "react-router-dom";
import concatStringIDS from "../utils/concatStrings";
import { useEffect, useState } from "react";
import "../styles/ShopDisplays.css";

function ShopDisplays() {
    const access_token = useOutletContext();
    const { genre } = useParams();
    const genreObject = albumGenres.find(album => album.genre === genre);
    const albumIDS = concatStringIDS(genreObject.spotifyIDs);
    const [albums, setAlbums] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAlbums() {
            setAlbums(null);

            fetch(`https://api.spotify.com/v1/albums?ids=${albumIDS}`, {
                method: "get",
                headers: {
                    "Authorization": `Bearer ${access_token}`
                },
            })
            .then((response) => response.json())
            .then((data) => {
                if (active) setAlbums(data.albums);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
        }
        let active = true;
        fetchAlbums();
        return () => {
            active = false;
        }
    }, [access_token, albumIDS])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className="album-genre-display">
            {albums?.map(album => (
                <div key={album.id} className="display-albums-genre">
                    <img src={album.images[0].url}/>
                </div>
            ))}
        </div>
    )
}

export default ShopDisplays;