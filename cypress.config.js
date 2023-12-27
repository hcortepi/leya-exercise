const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.leyaonline.com/pt',
  },
  video: true
});
