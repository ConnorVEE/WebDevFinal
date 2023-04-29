const mongoose = require('mongoose');

taskSchema = mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId},
    reminder: {type: Boolean},
    text: {type: String},
    day: {type: String}
})

module.exports = mongoose.model('task', taskSchema);
