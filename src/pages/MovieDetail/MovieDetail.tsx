import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addMoviesOrSeries, IMovieOrShow } from '../../features/movies/moviesSlice';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_KEY } from '../../Api/MovieApiKey';
import { RootState } from '../../store';



export const MovieDetail: FC = () => {
    const movieOrShow = useSelector((state: RootState) => state.movie.selectedMovieOrShow);
    console.log('movieOrShow>>>', movieOrShow);

    const imdbId = useParams();
    const id = imdbId.imbID;

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAsyncMovieOrShowDetail = async (id: string | undefined) => {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&Plot=full`);
            const data = await response.data;
            dispatch(addMoviesOrSeries(data));
        };


        fetchAsyncMovieOrShowDetail(id);
    }, [dispatch]);


    return (
        <div>{movieOrShow.Title}</div>
    );
};
