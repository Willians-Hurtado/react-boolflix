
import { useState } from "react"

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");


    function handleSubmit(e) {
        e.preventDefault();
        console.log("searchText", searchText);

        const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
        const base_movies_api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchText}`

        fetch(base_movies_api_url)
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data);
                setMovies(data.results)


            })
            .catch((error) => {
                console.log("error", error);
            })

    }

    return (
        <>
            <header>
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
                            <p>{movie.original_language}</p>
                            <p>{movie.vote_average}</p>
                        </div>

                    ))}
                </div>

            </header>
        </>
    )
}