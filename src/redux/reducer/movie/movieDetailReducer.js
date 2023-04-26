import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieDetail: {},
    loading: false,
    error: null,
};

const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers: {
        getMovieDetail: (state,action) => {
            state.movieDetail = action.payload;
            state.loading = true;
            state.error = null;
        }
    }
});

export const { getMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;