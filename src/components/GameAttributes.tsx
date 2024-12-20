import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
            key={platform.id}
          >
            {platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((g) => (
          <Text fontSize="sm" fontWeight="bold" color="gray.500" key={g.id}>
            {g.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((p) => (
          <Text fontSize="sm" fontWeight="bold" color="gray.500" key={p.id}>
            {p.name}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
