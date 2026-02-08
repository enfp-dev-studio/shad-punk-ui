import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  experimental: {
    // 개발 중 캐싱 비활성화
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
};

export default nextConfig;
