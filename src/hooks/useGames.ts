import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  background_image: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
