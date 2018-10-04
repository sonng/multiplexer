import * as fs from "fs"
import * as console from "console"
import { Config } from "./config"

const output = fs.createWriteStream('/Users/son/logs/plex/stdout.log');
const errorOutput = fs.createWriteStream('/Users/son/logs/plex/stderr.log');
const logger = new console.Console(output, errorOutput)

export class Master {
  config: Config

  constructor(config: Config) {
    this.config = config
  }

  run() {
    console.log(this.config.argv)
  }
}
