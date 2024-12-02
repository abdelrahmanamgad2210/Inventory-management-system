const express = require('express');
const session = require('express-session');  // Add this line
const connectToMongo = require('./db');
connectToMongo();

const app = express();
const port = 3001;

const cors = require('cors');
const router = require('./Routes/router');
const authRouter = require('./Routes/auth');

app.use(cors());
app.use(express.json());

// Initialize session middleware
app.use(session({
    secret: 'your_secret_key',  // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Set to true if using HTTPS
}));

// Use the auth routes
app.use('/auth', authRouter);
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
