const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "apzo93",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
