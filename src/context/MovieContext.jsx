import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
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
        if (searchText === "") {
            return (
                alert("Please enter a movie name")
            )
        }

    }
    return (
        <MovieContext.Provider value={{ movies, setMovies, searchText, setSearchText, handleSubmit }}>
            {children}
        </MovieContext.Provider>
    )
}











