const mongoose = require('mongoose');

taskSchema = mongoose.Schema({
    text: {type: String},
    day: {type: String},
    reminder: {type: Boolean}
})

module.exports = mongoose.model('Post', taskSchema);
