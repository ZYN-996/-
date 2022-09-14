import axios from "axios";
export default async function (id) {
  return await axios.get(`http://139.9.48.23:8080/detail?id=${id}`);
}
