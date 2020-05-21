const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});


//Creating a Virtual Field
userSchema.virtual('password')
    .set(function(password) {
        //Create Temporary variable called password
        this._password = password;
        //Generate a timestamp
        this.salt = uuidv1();
        //Encrypt Password
        this.hashed_password = this.encryptPassword(password)
    })

    .get(function() {
        return this._password
    })


//Encryption Method
userSchema.methods = {
    encryptPassword: function(password){
        if(!password) return "";
        try{
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');

        }catch (e) {
                return "";
        }
    }
}



module.exports = mongoose.model('User', userSchema);
