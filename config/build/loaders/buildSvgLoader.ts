export function buildSvgLoader() {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            },
                        },
                    ],
                },
            },
        }],
    };
}
