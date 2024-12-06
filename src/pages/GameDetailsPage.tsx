import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenShots";
// import DefinitionItem from "../components/DefinitionItem";
// import CriticScore from "../components/CriticScore";
// import GameAttributes from "../components/GameAttributes";
// import GameTrailer from "../components/GameTrailer";
// import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Stack spacing={3}>
            <Heading>{game.name}</Heading>
            <ExpendableText>{game.description_raw}</ExpendableText>
            <GameAttributes game={game} />
          </Stack>
        </GridItem>
        <GridItem>
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
      <GameTrailer gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
