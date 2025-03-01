import "../styles/Vinyl.css";

function Vinyl({ URL, albumName }) {
    return (
        <div className="vinyl-item">
            <img src={URL}/>
            <p>{albumName}</p>
        </div>
    )
}

export default Vinyl;