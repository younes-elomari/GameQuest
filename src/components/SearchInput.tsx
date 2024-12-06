import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText  = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement marginX={1} children={<BsSearch />} />
        <Input
          ref={ref}
          fontSize="small"
          size="md"
          borderRadius={20}
          placeholder="Search games"
          variant="outline"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
