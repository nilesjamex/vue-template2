const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
       @import '@/styles/_variables.scss';
       @import '@/styles/_utils.scss';
       @import '@/styles/_mixins.scss';
       @import '@/styles/_container.scss';
       @import '@/styles/_functions.scss';
       @import '@/styles/_typography.scss';
       `,
      },
    },
  },
});
