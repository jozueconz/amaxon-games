import { Spinner } from "@chakra-ui/spinner";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstVideo = data?.results[0];

  return firstVideo ? (
    <video src={firstVideo.data[400]} poster={firstVideo.preview} controls />
  ) : null;
};

export default GameTrailers;
