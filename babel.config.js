module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      '@babel/plugin-proposal-class-properties',
      'react-native-reanimated/plugin',
      // ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-decorators', { version: '2023-05' }][
        ('@babel/plugin-transform-class-properties', { loose: true })
      ],
    ],
  };
};
