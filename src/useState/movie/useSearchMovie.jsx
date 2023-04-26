import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSearchMovie } from "../../redux/reducer/movie/moiveSearchReducer";
const useSearchMovie = () => {
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");

  function handleChange(e) {
    setSearchMovie(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postSearchMovie(searchMovie));
    setSearchMovie("");
  }

  return {searchMovie,handleChange, handleSubmit };
};

export default useSearchMovie;
