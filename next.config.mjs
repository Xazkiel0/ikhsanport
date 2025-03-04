/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'assets.aceternity.com',
                pathname: '/**'
            },
            {
                hostname: 'images.unsplash.com',
                pathname: '/**'
            },
            {
                hostname: 'api.microlink.io',
                pathname: '/**'
            },
        ],
        domains: [
            "api.microlink.io",
        ],
    }
};

export default nextConfig;
