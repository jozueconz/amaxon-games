import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      as="form"
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        if (inputRef.current) onSearch(inputRef.current.value);
      }}
      width="100%"
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search game..."
          ref={inputRef}
          variant="filled"
        />
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
