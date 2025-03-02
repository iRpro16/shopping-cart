import albumGenres from "../api/shopData";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Shop() {
    const {token, vinyls, setVinyls} = useOutletContext();
    
    return (
        <>
            <h1>This is the Shop page!</h1>
            <li><Link to="/shop">all</Link></li>
            {albumGenres.map(album => {
                return (
                    <li key={album.id}><Link to={album.genre}>{album.genre}</Link></li>
                )
            })}
            <Outlet context={{token, vinyls, setVinyls}}/>
        </>
    );
};

export default Shop;