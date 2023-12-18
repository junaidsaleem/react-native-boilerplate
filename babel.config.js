module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // The root folder
        alias: {
          // Define your path aliases here
          components: './src/components',
          screens: './src/screens',
          navigation: './src/navigation',
          utils: './src/utils',
          style: './src/styles',
          store: './src/store',
          // Add other aliases as needed
        },
      },
    ],
  ],
};
