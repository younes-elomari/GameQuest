import platforms from "../data/platforms";

const usePlatforms = () => ({
  data: platforms.results,
  isLoading: false,
  error: null,
});
export default usePlatforms;
