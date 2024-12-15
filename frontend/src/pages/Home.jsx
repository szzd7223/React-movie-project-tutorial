import { useState, useEffect } from "react"
import MovieComponent from "../componenets/MovieComponent"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api"

function Home() {
    const [searchQuery, setSearchQuery] = useState()
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadPopularMovies = async() => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])
    
    const handleSearch = async (e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies")
        } finally {
            setLoading(false)
        }
    }
    
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-input">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? 
            <div className="loading-div">Loading...</div> : 
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieComponent movie={movie} key={movie.id}/>
                ))}
            </div>}
            
        </div>
        
    )
}

export default Home