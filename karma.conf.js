module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "lib/**/*.ts" },
      { pattern: "./tests/**/*spec.ts" }
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"]
    },
    reporters: ["dots", "karma-typescript"],
    browsers: ["ChromeHeadless"]
  });
}