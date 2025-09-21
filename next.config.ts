import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["3gmp0o29va.ucarecd.net", "ucarecdn.com"],
  },
  serverExternalPackages: ["pdf-parse"],
};

export default nextConfig;
