module.exports = {
  // ... other configuration options
  module: {
    rules: [
      // ... other rules
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
};
