import api from "./api";


export const searchByTitle = async (title) => {
  var response = "";
  try {
    response = await api.get(`?apikey=b1bb6bac&t=${title}`);
  } catch (err) {
    return "";
  }
  return response
}
