import ImageCarousel from "./ImageCarousel";
import { useOutletContext } from "react-router-dom";

function Home() {
    const {albums} = useOutletContext();

    return (
        <div>
            <h1>This is the Home page!</h1>
            {!albums ? (
                <p>Loading...</p>
            ) : (
                <ImageCarousel albums={albums} />
            )}
        </div>
    )
}

export default Home;