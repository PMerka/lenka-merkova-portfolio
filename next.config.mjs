/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
    });
    return cfg;
  },
};

export default nextConfig;
