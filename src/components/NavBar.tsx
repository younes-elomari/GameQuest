import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <Flex align="center" gap={10}>
      <HStack spacing={2}>
        <Image src={logo} alt="website-logo" boxSize="60px" />
        <Text size="xl" as="b">
          Gamequest
        </Text>
      </HStack>
      <SearchInput onSearch={onSearch} />
    </Flex>
  );
};

export default NavBar;
