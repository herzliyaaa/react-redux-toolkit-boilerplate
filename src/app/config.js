import axios from "axios";
const token = "fakeExampleToken";

export default axios.create({
  baseURL: "http://localhost:5032/api",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
