const path = require("path");
const router = require("express").Router();

// API Routes
router.get('/api/:uid/books', async (req, res) => {
  // Should return all books saved by particular user
});

router.post('/api/:uid/books', async (req, res) => {
  // Should add a book to the database with the given user ID
});

router.delete('/api/books/:bid', async (req, res) => {
  // Should delete a book by the given book ID
})

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
