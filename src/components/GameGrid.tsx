import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import ErrorMessage from "./ErrorMessage";
import React from "react";
import GameCardContainer from "./GameCardContainer";
import { Spinner } from "@chakra-ui/react";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <ErrorMessage error={error.message} />;

  return (
    <Box paddingX={2}>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} paddingY={5} gap={4}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          alignSelf="center"
          paddingX={10}
          fontSize="13px"
          onClick={() => fetchNextPage()}
          marginY={5}
        >
          Load more
          {isFetchingNextPage && <Spinner marginLeft={2} boxSize="22" />}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
