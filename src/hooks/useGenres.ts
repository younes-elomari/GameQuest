import genres from "../data/genres";

const useGenres = () => ({
  data: genres.results,
  isLoading: false,
  error: null,
});

export default useGenres;
