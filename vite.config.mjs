import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    server: {
        allowedHosts: true,
    },
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'resources',
                    dest: ''
                },
                {
                    src: 'resources/fonts/*',
                    dest: 'fonts'
                }
            ],
        }),
    ],
});
