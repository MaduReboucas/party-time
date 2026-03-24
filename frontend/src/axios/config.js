import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-type": "applicantion/json",
  },
});

export default partyFetch;
