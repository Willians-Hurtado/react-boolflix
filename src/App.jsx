import MovieContext from "./context/MovieContext"
import MoviePage from "./components/MoviePage"
import MovieList from "./components/MovieList"
import MovieCard from "./components/MovieCard"

function App() {


  return (
    <>

      <MovieContext.Provider value={{}}>
        <MoviePage />
        <MovieList />
        <MovieCard />

      </MovieContext.Provider>
    </>
  )
}

export default App
