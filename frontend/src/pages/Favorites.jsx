import MovieComponent from "../componenets/MovieComponent"
import { useMovieContext } from "../contexts/MovieContext"

function Favorites() {
    const { favorites } = useMovieContext()

    if(favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieComponent movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }

    return(
        <h1>This is the favorites page</h1>
    )
}

export default Favorites