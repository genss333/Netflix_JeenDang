import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    loading: false,
    error: null,
};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        getMoviesStart: (state,action) => {
            state.movies = action.payload;
            state.loading = true;
            state.error = null;
        }
    }
});

export const { getMoviesStart } = movieSlice.actions;
export default movieSlice.reducer;
    