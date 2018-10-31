const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const mongodb = require('mongodb')
const PORT= 3000

// getting id
var ObjectID = mongodb.ObjectID;

let db;

let posts

// const mongoUrl = 'mongodb://<dbuser>:<dbpassword>@ds145463.mlab.com:45463/movies'
const mongoUrl = 'mongodb://ahmadyassin:12345ahmad@ds147033.mlab.com:47033/posts'

mongodb.MongoClient.connect(mongoUrl, function (err, database) {
    if (err) {
      console.log(err);
    }

    // Save database object from the callback for reuse.
    db = database.db('posts');

    posts = db.collection("posts")

    console.log("Database connection ready");

    var server = app.listen(PORT, function () {
        console.log("App now running on port", PORT);
    });

})


  // for parsing and delevering the json
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}) );

  // for google auth and allowing passing headers from server to app
  app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });


  
app.get('/', (req, res) => {
    res.send({
        msg: 'Welcome to Posts Backend'
    })
})

app.get('/posts', (req, res) => {
    posts.find({}).toArray( (err, document) => res.send(document) )
})

app.get('/getPost/:id', (req, res) => {
    posts.find({_id: ObjectID(req.params.id)}).toArray( (err, document) => res.send(document[0]) )
})

app.post('/addPost', (req, res) => {
    posts.insertOne(req.body, function(err, result) {
        if(err){
            console.log(err)
        }
        console.log(result)
    })
})

app.put('/updatePost/:id', (req, res) => {
    let myQuery =  { _id: ObjectID(req.params.id) }

    let post = {
        "title": req.body.title,
        "body": req.body.body,
        "image": req.body.image,
    }

    let newValue = {$set: req.body}
    posts.findOneAndUpdate( myQuery, {$set: post} )
})

app.delete('/deletePost/:id', (req, res) => {
    posts.remove( { _id: ObjectID(req.params.id) } )
})

 
