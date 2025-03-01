import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import userInfo from "../api/data.js";
import "../styles/ImageCarousel.css";

function ImageCarousel({ access_token }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/albums?ids=${userInfo.spotifyIDS}`, {
            method: "get",
            headers: {
                "Authorization": `Bearer ${access_token}`
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
        .then((data) => setData(data.albums))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [access_token]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla_container">
                {data?.map(album => (
                    <div key={album.id} className="embla_slide">
                        <img src={album.images[0].url}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel;