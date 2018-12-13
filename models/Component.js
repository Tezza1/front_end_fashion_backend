const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ComponentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
        default: 'Coming soon...'
    },
    github_stars: {
        type: Number
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = Component = mongoose.model('components', ComponentSchema);
// mongoose.model('notes', noteSchema);
