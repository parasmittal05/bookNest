// vite.config.js
export default {
  build: {
    outDir: 'dist',  // or whatever your build directory is
  },
  server: {
    historyApiFallback: true, // Important for handling routes correctly
  },
};
