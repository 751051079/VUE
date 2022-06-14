const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  //部署应用包时的基本 URL
  publicPath:"./",
  //当运行 yarn build 时生成的生产环境构建文件的目录
  // outputDir:"./",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir:"./static/",
  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath:"./",
  //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave:'default',
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  runtimeCompiler:false,
  //默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。不过，对所有的依赖都进行转译可能会降低构建速度。如果对构建性能有所顾虑，你可以只转译部分特定的依赖：给本选项传一个数组，列出需要转译的第三方包包名或正则表达式即可。
  transpileDependencies:false,
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap:false,
  //如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数既可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
  configureWebpack:()=>{

  },
  //是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack:()=>{

  },
  css:{
    //默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
    // requireModuleExtension:true,
    //是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
    extract:true,
    //是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    sourceMap:false,

  },
  devServer:{
    //如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置
    // proxy:'http://localhost:8080/',
    //这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。
    // pluginOptions:{
    //   foo:{
    //     // 插件可以作为 `options.pluginOptions.foo` 访问这些选项
    //   }
    // }
    //保存自动编译
    hot:true
  }
})

