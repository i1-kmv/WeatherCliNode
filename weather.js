#!/ust/bin/env node
import { getArgs } from './helpers/args.js';
import {printHelp, printError, printSuccess, printWeather} from "./services/log.service.js";
import {getKeyValue, saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getIcon, getWeather} from "./services/api.servie.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Token is empty");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess("Token was saved");
    } catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError("City is empty");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess("City was saved");
    } catch (e) {
        printError(e.message);
    }
}

const getForcast = async() => {
    try {
        const city = await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather?.weather[0].icon));
    } catch (e) {
        if (e?.response?.status === 404) {
            printError("City not found");
        } else if (e?.response?.status === 401) {
            printError("Authorization error");
        } else {
            printError(e.message);
        }
    }
}

const initCli = () => {
   const args = getArgs(process.argv);
   if (args?.h) {
      return printHelp()
   }
   if (args?.s) {
      return saveCity(args?.s);
   }
   if (args?.t) {
      return saveToken(args?.t)
   }
    return getForcast();
}

initCli();
