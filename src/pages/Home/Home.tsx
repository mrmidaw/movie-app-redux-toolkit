import React, { FC, useEffect } from 'react';
import { MovieListing } from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import ReactLoading from 'react-loading';

export const Home: FC = () => {
    const loading: boolean = useSelector((state: RootState) => state.movie.loading);
    const dispatch = useDispatch();
    const movieText = 'Harry';
    const showText = 'Friends';


    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch]);

    return (
        <>
            {loading ?
                <ReactLoading height={667} width={375} />
                : <>
                    <div className='banner-img'></div>
                    <MovieListing />
                </>
            }
        </>
    );
};