const React = require("react");
const { ThemeProvider } = require("theme-ui");
const { deep } = require("@theme-ui/presets");

const tokens = {
  ...deep,
  sizes: { container: 1024 },
};

module.exports = ({ element }) => {
  return <ThemeProvider theme={tokens}>{element}</ThemeProvider>;
};
