const { Router } = require("express");
const Tasks = require("../Models/Tasks");
const router = Router();
const { check, validationResult } = require("express-validator");

// localhost:5000/tasks
router.get("/", async (req, res) => {
  try {
    const { executor } = req.query;
    const tasks = await Tasks.findAll({ where: { executor: executor, ended: 0 } });

    if (!tasks) {
      return res
        .status(400)
        .json({ message: "Tasks with this executor not find" });
    }
    res.status(200).json({ message: "Tasks found", tasks });
  } catch (err) {
    res.status(500).json({ message: "Вывалилась ошибка", err: err });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { executor, title, body, date, level_primary, appointment_by, ended = 0 } = req.query;

    const task = new Tasks({
      executor,
      title,
      body,
      date,
      level_primary,
      appointment_by,
      ended
    });

    await task.save();
    res.status(201).json({ message: "Task has been added" });
  } catch (err) {
    res.status(500).json({ message: "Вывалилась ошибка", err: err });
  }
});

router.put('/end-task', async (req, res) => {
  try {
    const { ended, id } = req.query

    await Tasks.update({
      ended: ended,
      updatedAt: new Date()
    }, {
      where: {id: id}
    })
    res.status(200).json({ message: "Task updated" });
  }catch (err) {
    res.status(500).json({msg: err.name})
  }
})

module.exports = router;
