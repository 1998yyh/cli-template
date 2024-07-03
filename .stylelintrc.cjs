// .stylelintrc.js
module.exports = {
  // 继承一系列规则集合
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    // standard 规则集合的 scss 版本
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  // 配置 rules
  rules: {
    // 开启 Prettier 自动格式化功能
    // 'prettier/prettier': true,
    "lightness-notation": false,
    "media-query-no-invalid": false,
    "selector-anb-no-unmatchable": false,
  }
};