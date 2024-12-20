import { Flex, Heading, HStack, useBreakpointValue } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { motion } from "framer-motion";
import SmallDivicesSearch from "./SmallDivicesSearch";
import SmallDevicesDrawer from "./SmallDevicesDrawer";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showSearch = useBreakpointValue({ base: false, md: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
        delay: 0.2,
      }}
    >
      <Flex justify="space-between" align="center" gap={5}>
        {!showSearch && <SmallDivicesSearch />}
        <HStack spacing={2}>
          <Link to="/">
            <Flex align="center" gap={2}>
              <Heading as="h1" fontSize="2xl" size="xl">
                GAME
              </Heading>
              <Heading letterSpacing={5} as="h1" fontSize="2xl" size="xl">
                QUEST
              </Heading>
            </Flex>
          </Link>
        </HStack>
        {showSearch && <SearchInput />}
        {!showSearch && <SmallDevicesDrawer />}
      </Flex>
    </motion.div>
  );
};

export default NavBar;
