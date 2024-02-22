import chalk from 'chalk';
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed("Error: ") + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen("Success: ") + message);
};

const printHelp = () => {
    console.log(
       dedent( `${chalk.bgCyan("Help")}
         Без параметров - вывод погоды
         -s [CITY] - установка города 
         -h - вывод помощи
         -t - получение токена`)
    );
};

const printWeather = (res, icon) => {
    console.log(
       dedent( `${chalk.bgCyan(`Weather in ${res.name}`)}\n${icon} ${res.weather[0].description}\nTemperature: ${res.main.temp}°C` )
    );
}

export { printError, printSuccess, printHelp, printWeather };


