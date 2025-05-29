export default {
    server: {
        allowedHosts: true,
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'resources',
                    dest: ''
                }
            ]
        })
    ]
};
