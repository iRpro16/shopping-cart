import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function Shop() {
    const {albums, vinyls, setVinyls} = useOutletContext();
    const albumGenres = ["rap", "r&b", "latin", "pop"];
    
    return (
        <>
            <h1>This is the Shop page!</h1>
            <li><Link to="/shop">all</Link></li>
            {albumGenres.map(genre => {
                return (
                    <li key={crypto.randomUUID()}><Link to={genre}>{genre}</Link></li>
                )
            })}
            <Outlet context={{albums, vinyls, setVinyls}}/>
        </>
    );
};

export default Shop;