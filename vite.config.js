import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.BASE_URL,
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (info) => {
          // Keep CSS files with a hash in the filename
          if (info.name?.endsWith('.css')) {
            return 'assets/[name].[hash].css';
          }
          // Exclude JPEG and PNG files from dynamic file generation
          if (
            info.name?.endsWith('.jpg')
          || info.name?.endsWith('.jpeg')
          || info.name?.endsWith('.png')
          || info.name?.endsWith('.ico')
          ) {
            return 'assets/[name].[ext]';
          }
          // Generate other files with a hash in the filename
          return 'assets/[name].[hash].[ext]';
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.ico']
})
