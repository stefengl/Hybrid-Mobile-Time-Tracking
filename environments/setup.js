const path = require('path');
const fs = require('fs')
const chalk = require('chalk')
const devConfigPath = './config.dev.js';
const prodConfigPath = './config.prod.js';
const envPath = path.resolve(__dirname, '../src/environment.ts');

const chosenEnv = process.env.NODE_ENV;

const setupEnvironment = (type) => {
  fs.copyFile(path.resolve(__dirname, type), envPath, () => {
    console.log(chalk.blue(type.toUpperCase() + " environment has been set up."))
  })
}

if (chosenEnv === "prod") {
  setupEnvironment(prodConfigPath)
} else {
  setupEnvironment(devConfigPath)
}
