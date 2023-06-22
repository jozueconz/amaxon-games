import axios from "axios";
import { RAWKEY } from "../env";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWKEY,
  },
});
