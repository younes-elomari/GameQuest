import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Box>
        <Link to={'/games/' + game.slug}>
          <Image
            _hover={{
              filter: "blur(1px)",
              boxShadow: "md",
            }}
            transition=".3s"
            cursor="pointer"
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
          />
        </Link>
        <Box paddingX={3} paddingY={5}>
          <Heading fontSize="1xl">{game.name}</Heading>
          <Flex
            paddingTop={3}
            align="center"
            justifyContent="space-between"
            marginBottom={3}
          >
            <Emoji rating={game.rating_top} />
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </Flex>
        </Box>
      </Box>
    </GameCardContainer>
  );
};

export default GameCard;
