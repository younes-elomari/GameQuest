import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  return genres.find((genre) => genre.id === id);
};

export default useGenre;
