import { Flex, Heading, HStack } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: .2,
      }}
    >
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
        <SearchInput />
      </Flex>
    </motion.div>
  );
};

export default NavBar;
