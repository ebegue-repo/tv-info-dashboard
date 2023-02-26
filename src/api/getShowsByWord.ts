import axios from "axios";

const getShowsByWord = async (queryWord: String) => {
  var data = null;

  try {
    const response = await axios.get(import.meta.env.VITE_APP_API_URL + import.meta.env.VITE_APP_ENDPOINT_GET_SHOWS_BY_WORD, { params: { q: queryWord } });
    data = await response.data;
  } catch (e) {
    console.error(`Error: the server responded with '${e.response}'`);
  }

  return data;
};

export default getShowsByWord;