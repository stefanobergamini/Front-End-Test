import api from "./api";

export const searchByTitle = async (title) => {
  var response = "";
  try {
    response = await api.get(`?apikey=728f1b02&t=${title}`);
  } catch (err) {
    return "";
  }
  return response
}
