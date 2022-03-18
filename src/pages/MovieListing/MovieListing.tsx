import React, { FC } from 'react';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { MovieCard } from '../MovieCard/MovieCard';
import { IMovie } from '../MovieCard/MovieCard';
import './MovieListing.scss';


export const MovieListing: FC = () => {
    const movies: any = useSelector((state: RootState) => state.movie.movies);

    let renderMovies = '';
    renderMovies =
        movies.Response === "True" ? (
            movies.Search.map((movie: IMovie, index: number) => (
                <MovieCard key={index} movie={movie} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
        </div>
    );
};
