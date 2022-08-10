import axios from "axios";

export const getData = async () => {
  const res = await axios.get("https://api.kanye.rest");
  return res.data.quote;
};
