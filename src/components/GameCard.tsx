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
import { motion } from "framer-motion";
import SectionHeadingMotion from "./motions/SectionHeadingMotion";
import FadeMotion from "./motions/FadeMotion";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Box>
        <Link to={"/games/" + game.slug}>
          <FadeMotion>
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
          </FadeMotion>
        </Link>
        <SectionHeadingMotion>
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
        </SectionHeadingMotion>
      </Box>
    </GameCardContainer>
  );
};

export default GameCard;
