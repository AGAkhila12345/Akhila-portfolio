import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: { workerThreads: true, cpus: 1, webpackBuildWorker: false, useTypeScriptCli: false },
};

export default nextConfig;


