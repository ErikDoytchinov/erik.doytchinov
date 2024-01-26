/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'media.licdn.com',
            port: '',
        },
        ],
    },
};

export default nextConfig;