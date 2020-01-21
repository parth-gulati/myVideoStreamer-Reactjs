import axios from "axios";

const KEY = "AIzaSyAQVGTSFjdWFPyClFnEHIgDodwzlfDsPac";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    type: "video",
    part: "snippet",
    maxResults: 6,
    key: `${KEY}`
  }
});
