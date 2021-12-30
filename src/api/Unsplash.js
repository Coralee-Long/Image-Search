import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID xWSiR2DZG8_qo5gkcJ8N4FTcQzXNI57F2nlVfvki9e0",
  },
});
