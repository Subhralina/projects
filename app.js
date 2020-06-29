//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

mongoose.connect("mongodb+srv://admin-subhralina:test123@to-do-list-yfatg.mongodb.net/blogDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);



const homeStartingContent1 = "Hi!!!";
const homeStartingContent2 = "Welcome to your Journal! Use this space to recored whatever you want. Use it as a diary, or a blog journal, or as a keeper for your brilliant ideas. You can also use this space to make notes, if you want. May be this can help you to record your feelings. Just click on COMPOSE and you are ready to go.";
const homeStartingContent6 = "Have a good day!!";


const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get("/", function(req, res) {

  Post.find({}, function(err, posts) {
    res.render("home", {
      startingContent1: homeStartingContent1,
      startingContent2: homeStartingContent2,
      startingContent6: homeStartingContent6,
      posts: posts
    });
  });

});


app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", function(req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  post.save(function(err) {
    if (!err) {
      res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res) {
      const requestedTitle = _.lowerCase(req.params.postName);

        const requestedPostId = req.params.postId;

        Post.findOne({
          _id: requestedPostId
        }, function(err, post) {
          res.render("post", {
            title: post.title,
            content: post.content,
            post: post
          });
        });
    });


    app.post("/delete", function(req, res){
      const checkedItemId = req.body.button;

        Post.findByIdAndRemove(checkedItemId, function(err){
          if(!err){
            console.log("Succesfully deleted the post!!");
            res.redirect("/");
          }
        });

    });





      app.listen(process.env.PORT || 3000, function() {
        console.log("Server started on port 3000");
      });
