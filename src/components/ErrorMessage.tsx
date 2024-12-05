import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

interface Props {
  error: string;
}

const ErrorMessage = ({ error }: Props) => {
  return (
    <Alert status="error" paddingY={5}>
      <AlertIcon />
      <AlertTitle>{error}!</AlertTitle>
    </Alert>
  );
};

export default ErrorMessage;
