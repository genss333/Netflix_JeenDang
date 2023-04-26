import { API_KEY } from "../../constants/AppConstanst";
import ApiConnect from "../apiConnect";

export default {
  getAllMovies: async (searchKey) => {
    const response = await ApiConnect.get(
      `/?apikey=${API_KEY}&s=${searchKey}&type=movie`
    );
    return response.data.Search;
  },

  getMovieDetail: async (id) => {
    const response = await ApiConnect.get(`/?apikey=${API_KEY}&i=${id}`);
    return response.data;
  },
};
