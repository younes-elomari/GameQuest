import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e835d085cce4eacae48bf0a5427e9a6",
  },
});
