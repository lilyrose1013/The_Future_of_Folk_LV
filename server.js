const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));
app.use('/assets', express.static(path.join(__dirname, '_assets')));
app.use('/styles', express.static(path.join(__dirname, '_styles')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/docs/*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path + '.html'), err => {
    if (err) res.status(404).send('Page not found');
  });
});

app.get('/posts/*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path + '.html'), err => {
    if (err) res.status(404).send('Page not found');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
