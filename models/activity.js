const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = {
    date: {
        type: String
    },
    time: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
}

module.exports = mongoose.model('Activity', activitySchema);