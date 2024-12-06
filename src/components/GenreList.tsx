import { useState } from "react";
import useGenres from "../hooks/useGenres";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const [show, setShow] = useState(false);

  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  let genres = data ? (show ? data.slice(0, 3) : data.slice(0, 9)) : [];

  return (
    <Box>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="3px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={5}
                objectFit="cover"
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "medium"}
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="md"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
        <ListItem paddingY="5px">
          <ButtonGroup
            onClick={() => setShow(!show)}
            size="sm"
            isAttached
            variant="outline"
          >
            <IconButton
              aria-label="Add to friends"
              icon={show ? <BsChevronDown /> : <BsChevronUp />}
            />
            <Button>{show ? "Show" : "Hide"}</Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </Box>
  );
};

export default GenreList;
