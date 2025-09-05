// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Add support for CSS modules
config.resolver.assetExts.push('css');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs'];

// Enable CSS modules
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
