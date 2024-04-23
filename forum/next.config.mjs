/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config, context) {
    config.plugins.push(UnoCSS({ presets: [presetUno()] }));

    if (context.buildId !== "development") {
      // * disable filesystem cache for build
      // * https://github.com/unocss/unocss/issues/419
      // * https://webpack.js.org/configuration/cache/
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      require('@unocss/core')({
        presets: [
          require('@unocss/preset-attributify'),
          require('@unocss/preset-uno'),
          require('@unocss/preset-web-fonts'),
        ],
        plugins: [
          require('@unocss/postcss'),
        ],
      })
    );
    return config;
  },
};


