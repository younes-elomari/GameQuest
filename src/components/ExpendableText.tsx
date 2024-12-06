import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [expended, setExpended] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= 300) return <Text>{children}</Text>;

  const summary = expended ? children : children.substring(0, limit) + "...";

  return (
    <Text size="md" fontWeight="bold" color='gray.600'>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        marginLeft={1}
        colorScheme="yellow"
        onClick={() => setExpended(!expended)}
      >
        {expended ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpendableText;
