#!/ust/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./services/storage.service.js";
import {getWeather} from "./services/api.servie.js";

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

const getForcast = async() => {
    try {
        const weather = await getWeather("mosco");
        console.log(weather);
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
   console.log(args);
   if (args?.h) {
      printHelp()
   }
   if (args?.s) {
      // save city
   }
   if (args?.t) {
      return saveToken(args?.t)
   }
    getForcast();
}

initCli();
