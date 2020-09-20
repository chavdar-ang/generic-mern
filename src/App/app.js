var express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is running"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;