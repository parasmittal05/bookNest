// vite.config.js
export default {
  base: '/', // Use '/' if deploying to the root of your domain (e.g., https://bookstore.onrender.com)
  build: {
    outDir: 'dist',  // The output directory for your production build
  },
  server: {
    historyApiFallback: true, // Ensure that any route fallback to index.html for client-side routing
  },
};
