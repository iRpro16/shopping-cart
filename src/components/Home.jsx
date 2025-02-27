import ImageCarousel from "./ImageCarousel";
import { useOutletContext } from "react-router-dom";

function Home() {
    const access_token = useOutletContext();

    return (
        <div>
            <h1>This is the Home page!</h1>
            {!access_token ? (
                <p>Loading...</p>
            ) : (
                <ImageCarousel access_token={access_token} />
            )}
        </div>
    )
}

export default Home;