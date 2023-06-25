import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQueary: GameQuery;
}

const GameHeading = ({ gameQueary }: Props) => {
  const heading = `${gameQueary.platform?.name || ""} ${
    gameQueary.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontSize="5xl" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
