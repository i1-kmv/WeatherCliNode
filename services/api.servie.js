import https from "https";
import {getKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error("No token provided");
    }
    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            q: city,
            appId: token,
            lang: "ru",
            units: "metric"
        }
    });
    return data;
    // const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    // url.searchParams.append("q", city);
    // url.searchParams.append("appId", token);
    // url.searchParams.append("lang", "ru");
    // url.searchParams.append("units", "metric");
    // https.get(url, (res) => {
    //     let data = "";
    //     res.on("data", (chunk) => {
    //         data += chunk;
    //     })
    //     res.on("end", () => {
    //         console.log(JSON.parse(data));
    //     })
    // })
}

export { getWeather };
