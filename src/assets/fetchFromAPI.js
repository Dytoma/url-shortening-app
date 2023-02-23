import axios from "axios";

export const BASE_URL = "https://api.shrtco.de/v2/shorten"


export const fetchFromAPI = async (url) => {

    const { data } = await axios.get(`${BASE_URL}?url=${url}`);

    return data;
}
