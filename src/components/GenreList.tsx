import useGenres from "../hooks/useGenres";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import SectionHeadingMotion from "./motions/SectionHeadingMotion";
import ImageIconMotion from "./motions/ImageIconMotion";
import ButtonMotion from "./motions/ButtonMotion";
import { Link } from "react-router-dom";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  let genres = data.slice(0, 7);

  return (
    <Box>
      <SectionHeadingMotion>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
      </SectionHeadingMotion>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="3px">
            <Link to='/'>
              <HStack>
                <ImageIconMotion>
                  <Image
                    src={getCroppedImageUrl(genre.image_background)}
                    boxSize="32px"
                    borderRadius={5}
                    objectFit="cover"
                  />
                </ImageIconMotion>
                <ButtonMotion>
                  <Button
                    fontWeight={
                      genre.id === selectedGenreId ? "bold" : "medium"
                    }
                    onClick={() => setGenreId(genre.id)}
                    variant="link"
                    fontSize="md"
                    whiteSpace="normal"
                    textAlign="left"
                  >
                    {genre.name}
                  </Button>
                </ButtonMotion>
              </HStack>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;
