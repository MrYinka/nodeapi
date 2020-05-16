const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },

    body:{
        type: String,
        required: true
    }

});

//export done with model name and schema
module.exports = mongoose.model('Post', postSchema);
