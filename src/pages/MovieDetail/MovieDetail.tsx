import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addMoviesOrSeries, removeSelectedMovieOrShow } from '../../features/movies/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_KEY } from '../../api/MovieApiKey';
import { RootState } from '../../store';
import './MovieDetail.scss';


export const MovieDetail: FC = () => {
    const movieOrShow = useSelector((state: RootState) => state.movie.selectedMovieOrShow);

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

        // Clear selected item
        return (() => {
            dispatch(removeSelectedMovieOrShow());
        });
    }, [dispatch, id]);

    return (
        <div className='movie-section'>
            <>
                <div className='section-left'>
                    <div className='movie-title'>{movieOrShow.Title}</div>
                    <div className='movie-rating'>
                        <span>
                            IMDB Rating <i className='fa fa-star'></i> : {movieOrShow.imdbRating}
                        </span>
                        <span>
                            IMDB Votes <i className='fa fa-thumbs-up'></i> : {movieOrShow.imdbVotes}
                        </span>
                        <span>
                            RunTime <i className='fa fa-film'></i> : {movieOrShow.Runtime}
                        </span>
                        <span>
                            Year <i className='fa fa-calendar'></i> : {movieOrShow.Year}
                        </span>
                    </div>
                    <div className='movie-plot'>{movieOrShow.Plot}</div>
                    <div className='movie-info'>
                        <div>
                            <span>Director</span>
                            <span>{movieOrShow.Director}</span>
                        </div>
                        <div>
                            <span>Stars</span>
                            <span>{movieOrShow.Actors}</span>
                        </div>
                        <div>
                            <span>Genres</span>
                            <span>{movieOrShow.Genre}</span>
                        </div>
                        <div>
                            <span>Languages</span>
                            <span>{movieOrShow.Language}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{movieOrShow.Awards}</span>
                        </div>
                    </div>
                </div>

                <div className='section-right'>
                    <img src={movieOrShow.Poster} alt={movieOrShow.Title} />
                </div>
            </>
        </div>
    );
};
