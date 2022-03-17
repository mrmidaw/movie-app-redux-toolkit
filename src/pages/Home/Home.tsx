import React, { useEffect } from 'react';
import { MovieListing } from '../MovieListing/MovieListing';
import movieApi from '../../Api/MovieApi';
import { API_KEY } from '../../Api/MovieApiKey';
import axios from 'axios';

export const Home = () => {

    useEffect(() => {
        const movieText = 'Harry';
        const fetchMovies = async () => {
            try {
                const response = await movieApi.get(`?apikey=${API_KEY}&s=${movieText}&type=movie`);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovies();
    }, []);


    return (
        <>
            <div className='banner-img'></div>
            <MovieListing />
        </>
    );
};