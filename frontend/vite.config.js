import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Esto le dice a Vite que procese archivos .js como JSX
      jsx: 'react-jsx',
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
});