import { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("movies.json")
            .then((res) => res.json())
            .then((data) => setMovies(data));
        setMovies(movies);
    }, []);

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
}
