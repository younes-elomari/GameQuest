import { Box, Image, SimpleGrid, Stack } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import { useState } from "react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const [imageIndex, setImageIndex] = useState(data?.results[0].id);

  const getImage = () => {
    return data?.results.find((img) => img.id === imageIndex);
  };

  return (
    <Stack spacing={3}>
      <Image
        width="100%"
        borderRadius={5}
        key={getImage()?.id}
        src={getImage()?.image}
      />
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={3}>
        {data?.results.map((item) => (
          <Box overflow="hidden" borderRadius={5}>
            <Image
              onClick={() => setImageIndex(item.id)}
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
