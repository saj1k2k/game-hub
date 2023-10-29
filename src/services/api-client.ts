import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7537834ee0dc4e13bb426f672f242986",
  },
});
