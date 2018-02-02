var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
process.env.CHROME_BIN = require("puppeteer").executablePath();

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    '../e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ["--headless", "--disable-gpu", "--window-size=800,600"],
    }
  },
  executablePath: process.env.CHROME_BIN,
  directConnect: true,
  baseUrl: 'http://localhost:8100/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e'
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};