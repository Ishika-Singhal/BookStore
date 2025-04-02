const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()

const port = process.env.PORT || 5000;


// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://book-store-frontend-tau-vert.vercel.app'],
    credentials: true
}))

// routes
const bookRoutes = require('./routes/book');
const orderRoutes = require("./routes/order")
const userRoutes =  require("./routes/user")
const adminRoutes = require("./routes/stats")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});