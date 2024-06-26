const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: Number,
        required: true
    },
    country: {
        type: String
    },
    gender: {
        type: String
    }
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = { User };