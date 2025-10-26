const express = require('express');

// create the Express app and define the port
const app = express();
const PORT = process.env.PORT || 3000;

// define and register routes
function setRoutes(app) {
  const router = express.Router();

  // sample routes
  router.get('/', (req, res) => {
    res.json({ message: 'Hello from node_app' });
  });

  router.get('/health', (req, res) => res.send('ok'));

  app.use('/', router);
}

setRoutes(app);

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// optional: export app for testing
module.exports = app;