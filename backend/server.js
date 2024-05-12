const app = require('./index'); // import the express app from index.js
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});