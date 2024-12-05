import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
