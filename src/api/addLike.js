import axios from "axios";
// export default async function (id, flag) {
//   return await axios.post(`http://139.9.48.23:8080/like?id=${id}&flag=${flag}`);
// }

export default async function (id, flag) {
  axios
    .post(`http://139.9.48.23:8080/like?id=${id}&flag=${flag}`)
    .then((res) => {
      return res;
    });
}
