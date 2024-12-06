import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import PlatformList from "../components/PlatformList";

const layout = () => {
    return <Grid
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
          <NavBar />
        </Stack>
      </GridItem>
      <Show above="md">
        <GridItem area="aside">
          <Stack paddingY={10} paddingX={8} spacing={5}>
            <GenreList />
            <PlatformList />
          </Stack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Outlet />
        {/* <Box paddingY={2} paddingX={2}>
          <GameHeading />
          <SortSelector />
        </Box>
        <GameGrid /> */}
      </GridItem>
    </Grid>;

//   return (
//     <>
//       <NavBar />
//       <Outlet />
//     </>
//   );
};

export default layout;
