import * as process from "process"
import * as fs from "fs"
import * as console from "console"

const output = fs.createWriteStream('~/logs/plex/stdout.log');
const errorOutput = fs.createWriteStream('~/logs/plex/stderr.log');
// custom simple logger
const logger = new console.Console(output, errorOutput)

process.argv.forEach((val: string, index: number) => {
  logger.log(`${index}: ${val}`);
});