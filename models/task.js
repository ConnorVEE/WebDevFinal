const mongoose = require('mongoose');

taskSchema = mongoose.Schema({
    reminder: {type: Boolean},
    text: {type: String},
    day: {type: String}
})

module.exports = mongoose.model('task', taskSchema);
