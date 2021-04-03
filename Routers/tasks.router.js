const { Router } = require("express");
const Tasks = require("../Models/Tasks");
const router = Router();
const { check, validationResult } = require("express-validator");

// localhost:5000/tasks
router.get("/", async (req, res) => {
  try {
    const { executor } = req.query;
    console.log(executor);
    const tasks = await Tasks.findAll({ where: { executor: executor } });

    if (!tasks) {
      return res
        .status(400)
        .json({ message: "Tasks with this executor not find" });
    }
    console.log(tasks);
    res.status(200).json({ message: "Tasks found", tasks });
  } catch (err) {
    res.status(500).json({ message: "Вывалилась ошибка", err: err });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { executor, title, body, date, level_primary, appointment_by } = req.query;
    // console.log(typeof appointment_by, 'NODE');
    const task = new Tasks({
      executor,
      title,
      body,
      date,
      level_primary,
      appointment_by
    });

    await task.save();
    res.status(201).json({ message: "Task has been added" });
  } catch (err) {
    res.status(500).json({ message: "Вывалилась ошибка", err: err });
  }
});

module.exports = router;
