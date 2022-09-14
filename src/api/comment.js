import axios from "axios";
import qs from "qs";
const url = "http://139.9.48.23:8080/comment";

export async function addComment(data) {
  return await axios.post(url, qs.stringify(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
export async function getComment(page, limit, articleId) {
  return await axios.get(
    `http://139.9.48.23:8080/comment?articleId=${articleId}&page=${page}&limit=${limit}`
  );
}
export async function deleteComment(id) {
  return await axios.delete(`http://139.9.48.23:8080/comment?id=${id}`);
}
