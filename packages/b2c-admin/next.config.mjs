/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['common'],
    async headers() {
        const header = [];

        header.push({
            headers: [
                {
                    key: 'X-Robots-Tag',
                    value: 'noindex',
                },
            ],
            source: '/:path*',
        });

        return header;
    },
};

export default nextConfig;
