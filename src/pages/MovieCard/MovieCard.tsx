import React, { FC } from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

export interface IMovie {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
}

interface IProps {
    movie: IMovie
}

export const MovieCard: FC<IProps> = ({ movie }) => {
    return (
        <div className='card-item'>
            <Link to={`/movie/${movie.imdbID}`}>
                <div className='card-inner'>
                    <div className='card-top'>
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className='card-bottom'>
                        <div className='card-info'>
                            <h4>{movie.Title}</h4>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
