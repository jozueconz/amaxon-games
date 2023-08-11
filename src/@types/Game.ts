import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  background_image: string;
  description_raw: string;
  genres: Genre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  slug: string;
}
