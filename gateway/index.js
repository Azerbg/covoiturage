const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Define routes and their target URLs
const routes = {
  '/trajets': 'http://localhost:3000/trajets',
  '/graphql': 'http://localhost:5000/graphql',
  // Add more routes as needed
};

// Create a proxy for each route
for (const route in routes) {
  const target = routes[route];
  app.use(
    route,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        [`^${route}`]: '', // Remove the route prefix
      },
    })
  );
}

// Example route to fetch trajets
app.get('/trajets', (req, res) => {
  const targetURL = 'http://localhost:3000/trajets'; 

  // Forward the request to the target URL
  createProxyMiddleware({
    target: targetURL,
    changeOrigin: true,
  })(req, res);
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`API gateway server listening on port ${PORT}`);
});
