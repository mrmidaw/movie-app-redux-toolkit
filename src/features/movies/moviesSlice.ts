import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../Api/MovieApi';
import { API_KEY } from '../../Api/MovieApiKey';


interface IRating {
    Source: string;
    Value: string;
}

export interface IMovieOrShow {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: IRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}
export interface MoviesState {
    loading: boolean
    movies: Record<string, never>
    shows: Record<string, never>
    selectedMovieOrShow: Record<string, never>
}

const initialState: MoviesState = {
    loading: false,
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
};

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const movieText = 'matrix';
        const response = await movieApi.get(`?apikey=${API_KEY}&s=${movieText}&type=movie`);
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows',
    async () => {
        const seriesText = 'Friends';
        const response = await movieApi.get(`?apikey=${API_KEY}&s=${seriesText}&type=series`);
        return response.data;
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
    async (imdbID) => {
        const response = await movieApi.get(`?apikey=${API_KEY}&i=${imdbID}$Plot=full`);
        return response.data;
    }
);


export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMoviesOrSeries: (state, action) => {
            state.selectedMovieOrShow = action.payload;
        },
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(fetchAsyncMovies.rejected, () => {
                console.log('Error');
            }),
            builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            }),
            builder.addCase(fetchAsyncShows.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(fetchAsyncShows.rejected, () => {
                console.log('Error');
            }),
            builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
                state.loading = false;
                state.shows = action.payload;
            }),
            builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
                state.selectedMovieOrShow = action.payload;
            });
    },
});

export const { addMoviesOrSeries, removeSelectedMovieOrShow } = moviesSlice.actions;
export default moviesSlice.reducer;