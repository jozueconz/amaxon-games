import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSearch = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <Box
      as="form"
      onSubmit={(event: React.FormEvent) => {
        event.preventDefault();
        if (inputRef.current) {
          onSearch(inputRef.current.value);
          navigate("/");
        }
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
