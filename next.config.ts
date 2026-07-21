import withPWAInit from "next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: false,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.example\.com/,
      handler: "NetworkFirst",
      options: {
        cacheName: "api-cache",
      },
    },
  ],
});

export default withPWA({
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.10.37"],
});
