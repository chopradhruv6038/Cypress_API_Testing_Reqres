const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "u2494c",
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
