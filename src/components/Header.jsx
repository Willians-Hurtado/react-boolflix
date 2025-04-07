
import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

export default function Header() {

    const { searchText, setSearchText, handleSubmit } = useContext(MovieContext)

    return (
        <>
            <header className="bg-black p-3 d-flex align-items-center justify-content-between">

                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="" />



                <div className="search-bar">
                    <input
                        type="search" name="serch-movie" id="search-movie"
                        placeholder="Search for a movie"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}

                    />

                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>




            </header>
        </>
    )
}