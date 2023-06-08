const mongoose = require('mongoose')
const server = require("./server");

try {
    mongoose.connect("mongodb://localhost:27017");
    server.listen(4000, async () => {
    console.log(`Running on http://localhost:4000/api...`);
  });
} catch (error) {
  throw new Error();
} 