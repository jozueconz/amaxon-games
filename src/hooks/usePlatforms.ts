import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    initialData: platforms,
    queryFn: apiClient.getAll,
    queryKey: ["platforms"],
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;
