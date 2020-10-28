const mongoose = require("mongoose");
const Budget = require("./budget.model");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const getBudgets = async () => {
    return await Budget.find();
}

const createBudget = async (title, budget, color) => {
    try {
        return await Budget.create([{ title: title, budget: budget, color: color }]);
    } catch (error) {
        return {
            error: error
        };
    }
}

const deleteBudget = async (title, budget) => {
    console.log(title, budget);
    const deletedBudget = await Budget.find({ title: title, budget: parseInt(budget) });
    return deletedBudget;
}

module.exports = {
    getBudgets,
    createBudget,
    deleteBudget
}