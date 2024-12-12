module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@lingui/babel-plugin-lingui-macro',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            base: './src',
            '@/*': ['./*'],
          },
        },
      ],
      'react-native-reanimated/plugin', // Always at the end
    ],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
  }
}
