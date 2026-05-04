import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/job", destination: "/", permanent: true }];
  },
};

export default nextConfig;
