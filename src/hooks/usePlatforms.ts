import { useQuery } from "@tanstack/react-query";
import { Platform } from "../@types/Platform";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    initialData: platforms,
    queryFn: apiClient.getAll,
    queryKey: ["platforms"],
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatforms;
