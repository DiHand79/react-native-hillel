module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-decorators',
          'react-native-reanimated/plugin',
          { legacy: true },
        ],
      },
    },
  };
};
