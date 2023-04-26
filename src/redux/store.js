import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/auth/loginReducer";
import movieSearchReducer from "./reducer/movie/moiveSearchReducer";
import movieDetailReducer from "./reducer/movie/movieDetailReducer";
import movieReducer from "./reducer/movie/movieReducer";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        movieSearch: movieSearchReducer,
        movieDetail: movieDetailReducer,
        loginStatus:loginReducer
    },
});

export default store;