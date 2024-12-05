import { Box, Flex, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformList from "./components/PlatformList";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        md: `'nav nav' 'aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem area="nav">
        <Stack paddingY={5} paddingX={8}>
          <NavBar
            onSearch={(searchText: string) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </Stack>
      </GridItem>
      <Show above="md">
        <GridItem area="aside">
          <Stack paddingY={10} paddingX={8} spacing={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre: Genre) =>
                setGameQuery({ ...gameQuery, genre })
              }
            />
            <PlatformList
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Stack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingY={2} paddingX={2}>
          <GameHeading gameQuery={gameQuery} />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder: string) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
