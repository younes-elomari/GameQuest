import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Container
      position="relative"
      maxW="1980px"
      paddingX={{ base: 3, sm: 3, md: 6, lg: 12 }}
    >
      <Box paddingY={5}>
        <NavBar />
      </Box>
      <Box textAlign="center" alignItems="center" paddingY={8}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </Text>
      </Box>
    </Container>
  );
};

export default ErrorPage;
