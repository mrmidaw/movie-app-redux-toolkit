import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MoviesState {
    movies: Record<string, never>
}

const initialState: MoviesState = {
    movies: {}
};


export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});

export const { addMovies } = moviesSlice.actions;
export default moviesSlice.reducer;