const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const uniqueValidator = require('mongoose-unique-validator');

let userSchema = new mongoose.Schema( {
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    pwd: {type:String, required : true},
    name: {type:String, required : true},
    roles: [],
    requests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    favouriteUsers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    favouriteTeams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    }],
    description: String,
    statusActive: {type: Boolean},

    isCoder: {type: Boolean},
    isArtist: {type: Boolean},
    isSounddesigner: {type: Boolean},
    isTeamlead: {type: Boolean}
});

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

userSchema.pre('save', function(next) {
    let user = this;

    /*if(!user.isModified('pwd'))
        return next();
*/
    bcrypt.hash(user.pwd, null, null, (err, hash) =>{
        if(err) return next(err);
        user.pwd = hash;
        next();
    })
});


module.exports = mongoose.model('User', userSchema);
