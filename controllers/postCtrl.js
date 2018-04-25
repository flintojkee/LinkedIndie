const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
    try {
        let author = req.params.id;
        let posts = await Post.find({author});
        res.send(posts);
    }
    catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};

exports.sendPost = (req, res) =>{
  let postData = req.body;
  console.log('sending new msg: '+postData.msg+", author: "+req.userId);
  postData.author = req.userId;

  let post = new Post(postData);
  post.save((err, result) => {
      if(err) {
          console.error('saving post error');
          return res.status(500).send({message:'saving post error'})
      }
      res.sendStatus(200);
  })
};