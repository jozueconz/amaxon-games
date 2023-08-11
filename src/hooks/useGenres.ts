import { useQuery } from "@tanstack/react-query";
import { Genre } from "../@types/Genre";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    initialData: genres,
    queryFn: apiClient.getAll,
    queryKey: ["genres"],
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default useGenres;
