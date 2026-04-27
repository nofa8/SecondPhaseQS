import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  projectId: "womxi3",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


