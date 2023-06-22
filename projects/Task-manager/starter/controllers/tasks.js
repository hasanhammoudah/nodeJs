const Task = require('../models/Task')
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })

    }
    // res.send('get all tasks')
}

const createTasks = async (req, res) => {
    // const task = await Task.create({name:'first Task'})
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const getTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const deleteTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        res.status(200).json({ task })
        // res.status(200).json({task:null ,status:'sucess' })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
    //res.send('delete task')
}


const updateTasks = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidator: true,
        })
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })

    }
    //res.send('update task')
}


module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks,


}