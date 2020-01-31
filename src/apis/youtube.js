import axios from "axios";

const KEY = "AIzaSyB4jO8UwoCO56q_kxBu2ef5hWdD454CfDk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
