const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let teamSchema = new mongoose.Schema( {
    teamTitle:{type: String, unique:[true, "is already taken"],lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    description:String,
    dateTime: Date,
    requests: [{
        _id:false,
        user:String,
        status:Boolean
    }],
    teamLead: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    areHiring: {type: Boolean},
    active: {type: Boolean}
});
teamSchema.plugin(uniqueValidator, {message: 'is already taken.'});
module.exports = mongoose.model('Team', teamSchema);
