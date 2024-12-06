import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenShots";
import SectionHeadingMotion from "../components/motions/SectionHeadingMotion";
import FadeMotion from "../components/motions/FadeMotion";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <SectionHeadingMotion>
            <Stack spacing={3}>
              <Heading>{game.name}</Heading>
              <ExpendableText>{game.description_raw}</ExpendableText>
              <GameAttributes game={game} />
            </Stack>
          </SectionHeadingMotion>
        </GridItem>
        <GridItem>
          <FadeMotion>
            <GameScreenshots gameId={game.id} />
          </FadeMotion>
        </GridItem>
      </SimpleGrid>
      <Box borderRadius={5} paddingY={5} overflow="hidden">
        <FadeMotion>
          <GameTrailer gameId={game.id} />
        </FadeMotion>
      </Box>
    </Box>
  );
};

export default GameDetailPage;
