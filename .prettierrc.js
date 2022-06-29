module.exports = {
  // 使用tab缩进还是空格缩进，false表示空格缩进；
  useTabs: false,
  // tab是空格的情况下，是几个空格，选择2个；
  tabWidth: 2,
  // 当行字符的长度，推荐80，也有人喜欢100或者120；
  printWidth: 80,
  // 使用单引号还是双引号，选择true，使用单引号；
  singleQuote: true,
  // 在多行输入的尾逗号是否添加，不需要添加设置为 `none`，需要添加设置为 all；
  trailingComma: 'none',
  // 语句末尾是否要加分号，默认值true，选择false表示不加；
  semi: false,
  // 表示.vue文件中，<script>和<style>标签中的代码缩进两个单元格
  vueIndentScriptAndStyle: true,
  // 对象，数组加空格
  bracketSpacing: true,
  // jsx > 是否另起一行
  jsxBracketSameLine: true,
  // (x) => {} 是否要有小括号
  arrowParens: 'always',
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false
}
