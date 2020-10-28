const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        minlength: 6,
        validate: {
            validator: function (v) {
                return /^#([A-Fa-f0-9]{6})$/.test(v);
            },
            message: props => `${props.value} is not a valid color!`
        },
    }
});


module.exports = mongoose.model('Budget', BudgetSchema);