#!/ust/bin/env node
import { getArgs } from './helpers/args.js';

const initCli = () => {
   const args = getArgs(process.argv);
   console.log(args);
   if (args?.h) {
      // help
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
