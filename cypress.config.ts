import { defineConfig } from "cypress";
import { configureVisualRegression } from "cypress-visual-regression";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    env: {
      visualRegressionType: "regression",
      visualRegressionBaseDirectory: "cypress-tests-results/screenshots/base",
      visualRegressionDiffDirectory: "cypress-tests-results/screenshots/diff",
      visualRegressionGenerateDiff: "fail",
      visualRegressionFailSilently: false,
    },
    screenshotsFolder: "cypress/screenshots/actual",
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
