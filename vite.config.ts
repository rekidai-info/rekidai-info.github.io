import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
        sveltekit()
    ],
    server: {
        fs: {
            allow: ['static']
        }
    },
    build: {
        minify: false
    }
};

export default config;
