const CopyPlugin = require("copy-webpack-plugin");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "9000",
        pathname: "/chatbot/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
        pathname: "/chatbot/**",
      },
      {
        protocol: "http",
        hostname: "37.27.85.156",
        port: "9000",
        pathname: "/chatbot/**",
      },
      {
        protocol: "https",
        hostname: "dev.tensurf.ai",
        port: "",
        pathname: "/chatbot/**",
      },
      {
        protocol: "https",
        hostname: "tensurf.ai",
        port: "",
        pathname: "/chatbot/**",
      },
    ],
  },
  reactStrictMode: true,
  webpack: (config, {}) => {
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.fallback = { fs: false };

    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "./node_modules/onnxruntime-web/dist/ort-wasm.wasm",
            to: "static/chunks/[name][ext]",
          },
          {
            from: "./node_modules/onnxruntime-web/dist/ort-wasm-simd.wasm",
            to: "static/chunks/[name][ext]",
          },
          {
            from: "node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js",
            to: "static/chunks/[name][ext]",
          },
          {
            from: "node_modules/@ricky0123/vad-web/dist/*.onnx",
            to: "static/chunks/[name][ext]",
          },
        ],
      })
    );

    return config;
  },
};

module.exports = nextConfig;
