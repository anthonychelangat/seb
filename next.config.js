import("next").NextConfig;

module.exports = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
    cacheComponents: true,
  },
};
