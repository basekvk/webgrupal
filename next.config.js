// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    // Uncomment the line below to enable basePath, pages and
    // redirects will then have a path prefix (`/app` in this case)
    //
    // basePath: '/app',

    async redirects() {
        return [
       
            // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
            {
                source: '/trabajamos/:slug*',
                destination: '/desatascos/:slug*',
                permanent: false,
            },
          
        ];
    },
};

module.exports = nextConfig;
