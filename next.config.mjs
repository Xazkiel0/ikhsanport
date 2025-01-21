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
            }
        ]
    }
};

export default nextConfig;
