import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
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
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const [show, setShow] = useState(false);

  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  let genres = show ? data.slice(0, 3) : data.slice(0, 9);

  return (
    <>
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "medium"}
                onClick={() => onSelectGenre(genre)}
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
        <ListItem paddingY="3px">
          <HStack>
            <Box
              cursor="pointer"
              alignContent="center"
              justifyItems="center"
              borderRadius={5}
              background="gray"
              boxSize="32px"
            >
              {show ? <BsChevronDown /> : <BsChevronUp />}
            </Box>
            <Button
              onClick={() => setShow(!show)}
              variant="link"
              fontSize="md"
              whiteSpace="normal"
              textAlign="left"
            >
              {show ? "Show" : "Hide"}
            </Button>
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default GenreList;
