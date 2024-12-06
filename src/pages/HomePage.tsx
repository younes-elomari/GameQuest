import { Box, Stack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";
import MainHeadingMotion from "../components/motions/MainHeadingMotion";

function App() {
  return (
    <Stack spacing={3}>
      <MainHeadingMotion>
        <GameHeading />
      </MainHeadingMotion>
      <MainHeadingMotion>
        <SortSelector />
      </MainHeadingMotion>
      <GameGrid />
    </Stack>
  );
}

export default App;
