import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../styles/ImageCarousel.css";

function ImageCarousel({ albums }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla_container">
                {albums?.map(album => (
                    (album.hottest && 
                        <div key={album.id} className="embla_slide">
                            <img src={album.url}/>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel;