import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ApiMovie from "../../api/connection/apiMovie";
import { getMovieDetail } from "../../redux/reducer/movie/movieDetailReducer";

const useMovieDetail = ()=>{
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    ApiMovie.getMovieDetail(id).then((response) => {
      dispatch(getMovieDetail(response));
      setLoading(false);
    });
  }, []);

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

export default useMovieDetail;