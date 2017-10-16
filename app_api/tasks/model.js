var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    goal: {
        type: String
    },
    deliverable: {
        type: [String]
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    process: {
        type: [String]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},
{
    timestamps: true
});

mongoose.model('Task', taskSchema);