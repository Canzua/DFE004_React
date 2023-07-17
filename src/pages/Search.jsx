import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import './MoviesGrid.css';

const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    const director = searchParams.get('director');
    const gender = searchParams.get('gender');

    const [movies, setMovies] = useState([]);

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&director=${director}&with_genders=${gender}`;
        getSearchedMovies(searchWithQueryURL);
    }, [query, director, gender]);
        
    return (
        <div className='container'>
            <h2 className='title'>
                Estes são os filmes com: <span className='query-text'>{query}</span>
            </h2>
            <div className='movies-container'>
                {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export default Search;