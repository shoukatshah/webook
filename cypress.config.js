// 
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wbk-web-test.webook.rocks/en',
    setupNodeEvents(on, config) {
      on('task', {
        log(message,payload) {
          console.log(message, payload)

          return null
        },
      })
    },
  },
})