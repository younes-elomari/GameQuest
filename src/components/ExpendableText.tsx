import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [expended, setExpended] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= 300) return <Text>{children}</Text>;

  const summary1 = expended
    ? children.substring(0, limit)
    : children.substring(0, limit) + "...";
  const summary2 = children.substring(limit, children.length);

  return (
    <Box>
      <Text size="md" fontWeight="bold" color="gray.600">
        {summary1}
      </Text>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: expended ? "auto" : "0", opacity: expended ? 1 : 0 }}
        transition={{ ease: "easeInOut" }}
      >
        <Text size="md" fontWeight="bold" color="gray.600">
          {summary2}
        </Text>
      </motion.div>
      <Button
        size="xs"
        fontWeight="bold"
        marginY={2}
        colorScheme="yellow"
        onClick={() => setExpended(!expended)}
      >
        {expended ? "Show Less" : "Read More"}
      </Button>
    </Box>
  );
};

export default ExpendableText;
