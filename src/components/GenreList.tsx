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
import { motion } from "framer-motion";
import SectionHeadingMotion from "./motions/SectionHeadingMotion";
import ImageIconMotion from "./motions/ImageIconMotion";
import ButtonMotion from "./motions/ButtonMotion";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const [show, setShow] = useState(false);

  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  let genres = data ? (show ? data.slice(0, 9) : data.slice(0, 3)) : [];

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
                  fontWeight={genre.id === selectedGenreId ? "bold" : "medium"}
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
          </ListItem>
        ))}
        <SectionHeadingMotion>
          <ListItem paddingY="5px">
            <ButtonGroup
              onClick={() => setShow(!show)}
              size="sm"
              isAttached
              variant="outline"
            >
              <IconButton
                aria-label="Add to friends"
                icon={show ? <BsChevronUp /> : <BsChevronDown />}
              />
              <Button>{show ? "Hide" : "Show"}</Button>
            </ButtonGroup>
          </ListItem>
        </SectionHeadingMotion>
      </List>
    </Box>
  );
};

export default GenreList;
