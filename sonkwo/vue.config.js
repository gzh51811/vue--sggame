const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    proxy: {
      "/api/*": {
        //https://www.sonkwo.com/api/v5/home.json
        target: "https://www.sonkwo.com", ///api/v5/home.json
        changeOrigin: true,
        pathRewrite: {
          "/api": "/api" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
  },
  configureWebpack: config => {
    config.resolve = {
      extensions: [".js", ".vue", ".json", ".css"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("src")
      }
    };
  }
};
