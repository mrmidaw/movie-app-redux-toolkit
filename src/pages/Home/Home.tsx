import React, { FC, useEffect } from 'react';
import { MovieListing } from '../MovieListing/MovieListing';
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/moviesSlice';
import { useDispatch } from 'react-redux';

export const Home:FC = () => {   
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    },[dispatch]);

    return (
        <>
            <div className='banner-img'></div>
            <MovieListing />
        </>
    );
};