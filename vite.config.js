import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './', // 상대 경로로 설정
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'), // 메인 페이지(index.html)
                details: resolve(__dirname, 'details.html'), // 서브 페이지(details.html)
            },
        },
    },
});
