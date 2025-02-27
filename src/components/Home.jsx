import ImageCarousel from "./ImageCarousel";
import { useOutletContext } from "react-router-dom";

function Home() {
    const access_token = useOutletContext();

    return (
        <div>
            <h1>This is the Home page!</h1>
            <p>{access_token}</p>
        </div>
    )
}

export default Home;