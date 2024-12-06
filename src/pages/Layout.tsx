import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box, Container, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import PlatformList from "../components/PlatformList";

const layout = () => {
  return (
    <Container
      position="relative"
      maxW="1980px"
      paddingX={{ base: 3, sm: 3, md: 6, lg: 12 }}
    >
      <Grid
        templateAreas={{
          base: `'nav' 'main'`,
          md: `'nav nav' 'aside main'`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Box paddingY={5}>
            <NavBar />
          </Box>
        </GridItem>
        <Show above="md">
          <GridItem area="aside" paddingY={{ base: 3, lg: 6 }}>
            <Stack spacing={5}>
              <GenreList />
              <PlatformList />
            </Stack>
          </GridItem>
        </Show>
        <GridItem area="main" paddingY={{ base: 3, lg: 6 }}>
          <Box
            overflowY="scroll"
            sx={{
              "::-webkit-scrollbar": { display: "none" },
              "-ms-overflow-style": "none",
              scrollbarWidth: "none",
            }}
            height="100vh"
          >
            <Outlet />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default layout;
