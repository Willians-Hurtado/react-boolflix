import MovieContext from "./context/MovieContext"
import MoviePage from "./components/MoviePage"
import MovieList from "./components/MovieList"
import MovieCard from "./components/MovieCard"
import Header from "./components/Header"


function App() {


  return (
    <>
      <Header />
      <MovieContext.Provider value={{}}>

        <MoviePage />
        <MovieList />
        <MovieCard />

      </MovieContext.Provider>
    </>
  )
}

export default App
