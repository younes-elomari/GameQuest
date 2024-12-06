import { Box, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import { useState } from "react";
import Screenshot from "../entities/Screenshot";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  const [image, setImage] = useState<Screenshot | null>();

  if (isLoading) return null;

  if (error) throw error;

  return (
    <Stack spacing={3}>
      {data?.results[0] && (
        <Image
          width="100%"
          borderRadius={5}
          key={image?.id}
          src={image?.image ? image?.image : data.results[0].image}
        />
      )}
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
        {data?.results.map((item) => (
          <Box overflow="hidden" borderRadius={5}>
            <Image
              onClick={() => setImage(item)}
              cursor="pointer"
              _hover={{
                transform: "scale(1.1)",
              }}
              key={item.id}
              src={item.image}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default GameScreenshots;
