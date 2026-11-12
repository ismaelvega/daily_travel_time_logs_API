// Vercel serverless entry point: re-export the Express app.
// src/index.js only calls app.listen() when run directly, so importing
// it here does not start a long-lived server.
const app = require("../src/index");

module.exports = app;
