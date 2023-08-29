module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["react-native-reanimated/plugin"],
      [
        "module-resolver",
        {
          alias: {
            "@hooks/*": ["./src/hooks/*"],
            "@services/*": ["./src/services/*"],
            "@components/*": ["./src/components/*"],
            "@screens/*": ["./src/screens/*"],
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
