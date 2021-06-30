import axios from "axios";

export const baseURL = "https://ancient-ravine-45699.herokuapp.com/api/v1";

export default axios.create({
   baseURL: baseURL
})