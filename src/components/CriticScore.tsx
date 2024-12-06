import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Badge paddingX={3} paddingY={1} size="lg" fontSize="12px" borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
