import ImageCarousel from "./ImageCarousel";
import { useOutletContext } from "react-router-dom";

function Home() {
    const {token} = useOutletContext();

    return (
        <div>
            <h1>This is the Home page!</h1>
            {!token ? (
                <p>Loading...</p>
            ) : (
                <ImageCarousel access_token={token} />
            )}
        </div>
    )
}

export default Home;