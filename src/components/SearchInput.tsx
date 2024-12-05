import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement marginX={1} children={<BsSearch />} />
      <Input
        fontSize="small"
        size="md"
        borderRadius={20}
        placeholder="Search games"
        variant="outline"
      />
    </InputGroup>
  );
};

export default SearchInput;
