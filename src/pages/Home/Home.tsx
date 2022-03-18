import React, { useEffect } from 'react';
import { MovieListing } from '../MovieListing/MovieListing';
import movieApi from '../../Api/MovieApi';
import { API_KEY } from '../../Api/MovieApiKey';
import { addMovies } from '../../features/movies/moviesSlice';
import { useDispatch } from 'react-redux';

export const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const movieText = 'Harry';
        const fetchMovies = async () => {
            try {
                const response = await movieApi.get(`?apikey=${API_KEY}&s=${movieText}&type=movie`);
                dispatch(addMovies(response.data));
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, [dispatch]);


    return (
        <>
            <div className='banner-img'></div>
            <MovieListing />
        </>
    );
};