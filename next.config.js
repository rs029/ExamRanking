import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  outputFileTracingRoot: __dirname,
  webpack: (config, { isServer }) => {
    // Exclude backend directory from webpack processing
    config.externals = config.externals || []
    if (isServer) {
      config.externals.push({
        'backend': 'commonjs backend'
      })
    }
    return config
  }
}

export default nextConfig
