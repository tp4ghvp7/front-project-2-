const{override,fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import',{ //引用 babel-plugin-import
    libraryName:'antd',        //  for antd
    libraryDirectory:'es',     //  es floder in the Code floder
    style:'css',               // 自动打包css
    }),
addLessLoader({
    javascriptEnabled:true,
    modifyVars:{'@primary-color':'#0096C3'},
}),
);