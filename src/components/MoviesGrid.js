import { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("movies.json")
            .then((res) => res.json())
            .then((data) => setMovies(data));
        setMovies(movies);
    }, []);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                className="search-input"
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={handleSearchTermChange}
            />

            <div className="movies-grid">
                {filteredMovies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
