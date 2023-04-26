import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchMovie: "Thor",
    loading: false,
    error: null,
};

const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState,
    reducers: {
        postSearchMovie: (state,action) => {
            state.searchMovie = action.payload;
            state.loading = true;
            state.error = null;
        }
    }
});

export const { postSearchMovie } = movieSearchSlice.actions;
export default movieSearchSlice.reducer;