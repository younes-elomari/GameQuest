import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex align="center" gap={5}>
      <HStack spacing={2}>
        <Flex align="center" gap={2}>
          <Heading as="h1" fontSize="2xl" size="xl">
            GAME
          </Heading>
          <Heading letterSpacing={5} as="h1" fontSize="2xl" size="xl">
            QUEST
          </Heading>
        </Flex>
      </HStack>
      <SearchInput onSearch={onSearch} />
    </Flex>
  );
};

export default NavBar;
