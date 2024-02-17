import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            web3: 'web3/dist/web3.min.js',
          },
      },
    plugins: [react()],
})
