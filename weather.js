#!/ust/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from "./services/log.service.js";

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
      // get token
   }
   // show weather
}

initCli();
