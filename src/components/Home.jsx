import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import { useOutletContext } from "react-router-dom";
import "../styles/Home.css"

function Home() {
    const {albums} = useOutletContext();

    return (
        <>
            <HomeDescription />
            <div className="home-component">
                <h1>Check out our hottest sellers!</h1>
                {albums === null || albums.length == 0 ? (
                    <p>Loading...</p>
                ) : (
                    <ImageCarousel albums={albums}/>
                )}
            </div>
            <Footer />
        </>
    )
}

function HomeDescription() {
    return (
        <div className="home-description">
            <p>
                Browse our extensive catalog of vinyl records, 
                from rap to latin, with detailed product 
                descriptions and high-resolution images. 
                Our web app features secure online ordering, add to cart, 
                and personalized recommendations to enhance your shopping experience
                Our web app is more than just an online store; it is a community for vinyl lovers. 
                Discover new music, rediscover old favorites, and build your dream collection!
            </p>
        </div>
    )
}

export default Home;