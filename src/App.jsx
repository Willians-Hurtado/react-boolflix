import { MovieProvider } from "./context/MovieContext"
import MovieCard from "./components/MovieCard"
import MovieList from "./components/MovieList"
import Header from "./components/Header"
import { MovieContext } from "./context/MovieContext"

function App() {


  return (
    <>

      <MovieContext.Provider value={{}}>
        <MovieProvider>
          <Header />
          <MovieCard />
          <MovieList />

        </MovieProvider>


      </MovieContext.Provider>
    </>
  )
}

export default App
