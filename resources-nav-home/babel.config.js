module.exports = {
  // 环境预设的解码规则
  "presets": [
    '@vue/cli-plugin-babel/preset',
    "@babel/preset-env",
  ],
  // 辅助性的插件
  "plugins": [
    [
      "component",
      {
        // element-ui按需加载
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
