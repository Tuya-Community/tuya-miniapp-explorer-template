module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleAttributePerLine: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  overrides: [
    {
      files: '*.rjs',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.tyss',
      options: {
        parser: 'css',
      },
    },
    {
      files: '*.tyml',
      options: {
        parser: 'html',
      },
    },
  ],
}
