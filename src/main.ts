import * as process from "process"

import { Config } from "./config"
import { Master } from "./master"

const config = new Config("~/.multiplexer.config", process.argv)

if (config.isConfigurationRun()) {
  // Print information about the nodes
  console.log("Information about the nodes")
} else {
  console.log("Running the nodes")

  const master = new Master(config)

  master.run()
}
