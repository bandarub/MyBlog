//load the files we need
const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
const app = express();
const posts = require('./routes/api/posts')
const path = require("path");

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB configuration
const db = require("./config/keys").mongoURI;

// connect to dB
mongoose
.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('mongodb connected....'))
.catch(err=>console.log(err));

// Use routes
app.use('/api/posts',posts);
app.get('/api/posts',(req,res)=>{
        res.json(posts)});

app.use(express.static(path.join(__dirname,'client','build')))
app.get('*',(req, res) => res.sendFile(path.join(__dirname, 'client','build','index.html')));

//Define port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}....`);
});
