import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiMovie from "../../api/connection/apiMovie";
import { getMoviesStart } from "../../redux/reducer/movie/movieReducer";

const useMovieData = () => {
    const dispatch = useDispatch();
    const { searchMovie } = useSelector((state) => state.movieSearch);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
      ApiMovie.getAllMovies(searchMovie).then((response) =>
        dispatch(getMoviesStart(response)),
        setLoading(false)
      );
    }, [searchMovie]);

    if (loading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>Loading...</h1>
        </div>
      );
    }
}

export default useMovieData;
