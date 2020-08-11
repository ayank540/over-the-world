import axios from "axios";

// base URL to make requests to the news database
const instance = axios.create({
    baseURL: "https://newsapi.org/v2/",
})

export default instance