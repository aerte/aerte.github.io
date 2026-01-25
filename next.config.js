/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure .nojekyll is copied to output
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('CopyNojekyll', () => {
            const fs = require('fs');
            const path = require('path');
            const source = path.join(process.cwd(), '.nojekyll');
            const dest = path.join(process.cwd(), 'out', '.nojekyll');
            if (fs.existsSync(source)) {
              fs.copyFileSync(source, dest);
            }
          });
        },
      });
    }
    return config;
  },
}

module.exports = nextConfig
