#!/ust/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printError, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
    try {
        await saveKeyValue("token", token);
        printSuccess("Token was saved");
    } catch (e) {
        printError(e.message);
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
   // show weather
}

initCli();
