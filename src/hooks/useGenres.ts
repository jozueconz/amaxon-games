import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  image_background: string;
  name: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    initialData: genres,
    queryFn: apiClient.getAll,
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGenres;
