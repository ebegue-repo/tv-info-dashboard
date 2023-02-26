import axios from "axios";

const getShows = async () => {
  var data = null;

  try {
    const response = await axios.get(import.meta.env.VITE_APP_API_URL + import.meta.env.VITE_APP_ENDPOINT_GET_ALL_SHOWS);
    data = await response.data;
  } catch (e) {
    console.error(`Error: the server responded with '${e.response}'`);
  }

  return data;
};

export default getShows;