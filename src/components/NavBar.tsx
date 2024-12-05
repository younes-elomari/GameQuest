import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack spacing={2}>
      <Image src={logo} alt="website-logo" boxSize="60px" />
      <Text size="xl" as="b">
        Gamequest
      </Text>
    </HStack>
  );
};

export default NavBar;
