import axios from "axios";
import { RAWKEY } from "../env";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWKEY,
  },
});
