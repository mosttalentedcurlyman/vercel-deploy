import express from 'express'	// import express
const app = express() // create express app
const port = 3000 // port to listen on (3000 is default)

// create a GET route
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// make the server listen on port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});