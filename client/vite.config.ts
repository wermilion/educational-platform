import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/shared/components'),
            '@assets': path.resolve(__dirname, './src/shared/assets'),
            '@styles': path.resolve(__dirname, './src/shared/assets/styles'),
            '@public': path.resolve(__dirname, './src/public'),
            '@uploads': path.resolve(__dirname, './src/uploads')
        }
    }
})
