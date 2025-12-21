import("next").NextConfig;

module.exports = {
  //cacheComponents: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
};
