const { default: mongoose } = require("mongoose")
const moongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String,
        requered: true,
    },
});

module.exports = new mongoose.model("Todo", TodoSchema);
