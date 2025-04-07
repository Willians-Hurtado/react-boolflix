import { MovieContext } from "../context/MovieContext"
import { useContext } from "react"

export default function MovieCard() {

    const { movies } = useContext(MovieContext)

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
            <div className="container ">
                <div className="row py-5">
                    {movies.map((movie) => (



                        <div key={movie.id} className="col-4 py-4">
                            <div className="card poster">

                                <img className="" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />

                                <div className="info">
                                    <p> Title: <span>{movie.title}</span> </p>
                                    <br />

                                    <p>Original title: <span>{movie.original_title}</span></p>
                                    <br />

                                    <p>Language: <span>{movie.original_language}</span></p>
                                    <br />

                                    <div className="star"><p>Rating:</p>

                                        {starRating(movie.vote_average).map((star, index) => (
                                            <i key={index} className={`${star}`}></i>

                                        ))}




                                    </div><br />

                                    <p>Overview: <span>{movie.overview}</span></p>


                                </div>




                            </div>

                        </div>

                    ))}
                </div>
            </div>


        </>
    )
}