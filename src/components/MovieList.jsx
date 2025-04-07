import { MovieContext } from "../context/MovieContext"
import { useContext } from "react"

export default function MovieList() {

    const { movies, setMovies, searchText, setSearchText, handleSubmit } = useContext(MovieContext)

    const toFlag = (countryCode) => {
        return countryCode
            .toUpperCase()
            .replace(/[A-Z]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 127397))
    }

    return (
        <>

            <section>
                <input
                    type="search" name="serch-movie" id="search-movie"
                    placeholder="Search for a movie"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}

                />

                <button type="submit" onClick={handleSubmit}>Submit</button>

                <div className="row">
                    {movies.map((movie) => (



                        <div key={movie.id} className="col-3">
                            <h2>{movie.title}</h2>
                            <p>{movie.original_title}</p>
                            <p>
                                Language: {toFlag(movie.original_language)}
                            </p>
                            <p>{movie.vote_average}</p>
                        </div>

                    ))}
                </div>

            </section>
        </>
    )
}