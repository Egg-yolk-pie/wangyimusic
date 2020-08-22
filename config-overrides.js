const { override, fixBabelImports } = require('customize-cra');
 
// 按需加载
 module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
)


const { resolve } = require("path");

function resolvePath(path) {
  return resolve(__dirname, "src", path);
}

  // 路径简写 / 路径别名
  addWebpackAlias({
    "@utils": resolvePath("utils"),
    "@api": resolvePath("api"),
    "@comps": resolvePath("components"),
    "@assets": resolvePath("assets"),
    "@pages": resolvePath("pages"),
    "@redux": resolvePath("redux"),
    "@conf": resolvePath("config"),
  })