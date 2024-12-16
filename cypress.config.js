const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { allureCypress } = require("allure-cypress/reporter");
const { Status } = require("allure-js-commons");
const os = require("node:os");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  allureCypress(on, config, {
    resultsDir: "./cypress/test_supports/allure-results",
    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      os_version: os.version(),
      node_version: process.version,
    },
  });

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/test_supports/screenshots",
    videosFolder: "cypress/test_supports/videos/",
    env: {
      allResultsPath: "./cypress/test_supports/test_reports/",
      cleanResults: true,
      omitFiltered: true,
      filterSpecs: true,
    },
  },
});
