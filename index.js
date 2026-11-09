// Simple express server 

import express from "express";

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to our Express.js server!");
});    

console.log(`This is ${PORT}`);







// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
