import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Game {
  background_image: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery.genre?.id,
            ordering: gameQuery.sortOrder,
            parent_platforms: gameQuery.platform?.id,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
