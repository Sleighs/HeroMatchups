const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require("path")

// Define Express app
const app = express();

// Parse JSON into JS objects
app.use(express.json());
//app.use(bodyParser.json());

// Enable CORS for all requests
app.use(cors());

// Log HTTP requests
app.use(morgan('combined'));

// Add build directory
/*app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/

// Routes
app.get('/greeting', (req, res)=> {
    res.send({
        "greeting": "hey yall"
    })
})

// starting the server
const PORT = process.env.PORT || 5000; 
  
app.listen(PORT, console.log(`Hero matchups server started on port ${PORT}`));