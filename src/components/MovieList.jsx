import { MovieContext } from "../context/MovieContext"
import { useContext } from "react"

export default function MovieList() {

    const { movies, setMovies, searchText, setSearchText, handleSubmit } = useContext(MovieContext)


    function starRating(vote_average) {
        const rating = parseFloat(vote_average)

        if (isNaN(rating)) {
            return "No Rating";
        }

        const roundedRating = Math.round(rating / 2);

        const stars = []

        for (let i = 1; i <= 5; i++) {
            if (i <= roundedRating) {
                stars.push("fas fa-star")

            } else {
                stars.push("far fa-star")
            }
        }
        return stars;
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

                            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                            <p>
                                Language: {movie.original_language}
                            </p>
                            <p>Rating:
                                {starRating(movie.vote_average).map((star, index) => (
                                    <i key={index} className={`${star}`}></i>

                                ))}



                            </p>
                        </div>

                    ))}
                </div>

            </section>
        </>
    )
}