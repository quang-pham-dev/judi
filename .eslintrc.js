// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
      },
    ],
  },
}
