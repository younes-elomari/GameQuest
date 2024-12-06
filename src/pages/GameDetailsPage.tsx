import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
// import ExpendableText from "../components/ExpendableText";
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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        {/* <ExpendableText>{game.description_raw}</ExpendableText>
        <GameAttributes game={game} /> */}
      </GridItem>
      <GridItem>
        {/* <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} /> */}
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;