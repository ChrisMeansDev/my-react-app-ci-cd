const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Only start the server if this file is run directly (not imported by tests)
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export app for testing
module.exports = app;
