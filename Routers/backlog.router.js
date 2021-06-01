const { Router } = require("express");
const Backlog = require("../Models/Backlog");
const Users = require("../Models/Users");
const Tasks = require("../Models/Tasks");
const router = Router();

// www.192.168.1.6:80/backlog

router.get('/', async (req, res) => {
    try {
        const backlogTasks = await Backlog.findAll()

        if (backlogTasks.length === 0) {
            return res.status(204).json({msg: 'У нас нет задач', code: 204})
        }

        res.status(200).json({msg: 'У нас есть задачи', res: backlogTasks, code: 200});
    } catch (err) {
        if (err instanceof SequelizeScopeError) {
            return res.status(400).json({msg: 'Ошибки в БД', err: err.name})
        }
        if (err instanceof SyntaxError) {
            return res.status(400).json({msg: 'Битая информация', err: err.name})
        }
    }
})

router.post('/get-task', async (req, res) => {
    try {
        const { taskID, executor } = req.query
        const userField = await Users.findByPk(executor)

        if (!userField) {
            return res.status(403).json({msg: 'Такого пользователя нет, доступ запрещен'})
        }
        const newTask = await Backlog.findOne({where: {id: taskID}})
        if (!newTask) {
            return res.status(404).json({msg: 'Такой задачи уже нет'})
        }

        const taskToExecutor = Object.assign({},
            {executor: userField.id, ended: 0, appointment_by: userField.id}, newTask.dataValues)
        delete taskToExecutor.id

        const Task = new Tasks(taskToExecutor)
        await Task.save()

        await Backlog.destroy({where: {id:taskID}})
        res.status(201).json({msg: 'Задача добавлена'})
    } catch (err) {
        console.log(err.body)
        return res.status(500).json({msg: 'Капитан, у нас проблема'})

    }
})

module.exports = router;
