const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventySass);
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
