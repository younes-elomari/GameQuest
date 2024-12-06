import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

function App() {
  return (
    <Box>
      <Box paddingY={2} paddingX={2}>
        <GameHeading />
        <SortSelector />
      </Box>
      <GameGrid />
    </Box>
  );
  //   return (
  //     <Grid
  //       templateAreas={{
  //         base: `'nav' 'main'`,
  //         md: `'nav nav' 'aside main'`,
  //       }}
  //       templateColumns={{
  //         base: "1fr",
  //         lg: "240px 1fr",
  //       }}
  //     >
  //       <GridItem area="nav">
  //         <Stack paddingY={5} paddingX={8}>
  //           <NavBar />
  //         </Stack>
  //       </GridItem>
  //       <Show above="md">
  //         <GridItem area="aside">
  //           <Stack paddingY={10} paddingX={8} spacing={5}>
  //             <GenreList />
  //             <PlatformList />
  //           </Stack>
  //         </GridItem>
  //       </Show>
  //       <GridItem area="main">
  //         <Box paddingY={2} paddingX={2}>
  //           <GameHeading />
  //           <SortSelector />
  //         </Box>
  //         <GameGrid />
  //       </GridItem>
  //     </Grid>
  //   );
}

export default App;