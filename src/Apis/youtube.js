import axios from "axios";

const KEY = "AIzaSyAujgnpIEjZ068dF1hpWVD7zFcaAZqb99Y";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
