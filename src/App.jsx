import { MovieProvider } from "./context/MovieContext"
import MoviePage from "./components/MoviePage"
import MovieList from "./components/MovieList"
import MovieCard from "./components/MovieCard"
import { MovieContext } from "./context/MovieContext"

function App() {


  return (
    <>

      <MovieContext.Provider value={{}}>
        <MovieProvider>
          <MoviePage />
          <MovieList />
          <MovieCard />
        </MovieProvider>


      </MovieContext.Provider>
    </>
  )
}

export default App
