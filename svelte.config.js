import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: false,
            targets: {
              esmodules: true
            }
          }
        ],
        [
          'minify',
          {
            'builtIns': false,
            'removeConsole': false,
            'removeDebugger': true
          }
        ]
      ]
    }
  }),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    appDir: 'app',
    vite: {
      server: {
        fs: {
          allow: ['static']
        }
      }
    },
    files: {
      assets: 'static',
    },
    prerender: {
      default: true
    }
  }
};

export default config;
