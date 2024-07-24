const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        Unque: true,
    },
    phone: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required:true,
    },
});
module.exports = mongoose.model('User', UserSchema);