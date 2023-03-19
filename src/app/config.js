import axios from "axios";
const token = "fakeExampleToken";

export default axios.create({
  baseURL: "http://172.104.187.33:5032/api", //API in Server
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
