import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:8800";

export default {
  signup: function({data}) {
    return axios.post(
      `${burl}/user/signup`,
      {
        data
      },
      {
        headers: headers
      }
    );
  },
};