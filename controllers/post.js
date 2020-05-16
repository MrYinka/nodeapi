//Importing the post model
const Post = require('../models/post');

exports.getPosts = (req, res) => {
    res.json({
        posts: [{title: 'Post One', Author: 'Robert'}, {title: 'Post Two', Author: 'Robert'} ]
    });
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log("Created Post: ", req.body);
    // post.save((result) => {
    //     res.status(200).json({
    //        post: result
    //     });
    //
    // });

    post.save().then(result => {
        res.status(200).json({
           post: result
        });
    });


}
