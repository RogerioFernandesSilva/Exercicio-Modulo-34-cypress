const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'https://ebac-agenda-contatos-tan.vercel.app',
  },
});