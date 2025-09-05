module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      // Required for NativeWind
      'nativewind/babel',
      // Optional: Add this if you're using reanimated
      'react-native-reanimated/plugin',
    ],
  };
};
