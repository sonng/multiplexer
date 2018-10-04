
export class Config {
  filename: string
  argv: string[]
  config?: ConfigFile

  constructor(filename: string, argv: string[]) {
    this.filename = filename
    this.argv = argv
  }

  load() {
    this.config = JSON.parse(require(this.filename))
  }
  
  isConfigurationRun(): boolean {
    return this.argv.filter((value: string, index: number, array: string[]) => { return value == "cmd" }).length > 0
  }
}

interface ConfigFile {
  isMaster: boolean
}
