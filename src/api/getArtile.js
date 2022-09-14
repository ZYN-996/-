import axios from "axios";
export default async function (page, limit) {
  return await axios.get(
    `http://139.9.48.23:8080/index?page=${page}&limit=${limit}`
  );
}
