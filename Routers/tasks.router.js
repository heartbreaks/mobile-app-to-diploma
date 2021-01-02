const { Router } = require("express");
const Tasks = require("../Models/Tasks");
const router = Router();

// localhost:5000/tasks
router.get("/", async (req, res) => {
  try {
    const { executor } = req.query;
    console.log(executor);
    const tasks = await Tasks.findAll({ where: { executor: executor } });
    
    if (!tasks) {
      return res.status(400).json({ message: "Tasks with this executor not find" });
    }

    res.status(200).json({ message: "Tasks found", tasks });
  } catch (err) {
    res.status(500).json({ message: "Вывалилась ошибка", err: err });
  }
});

// router.post("/add", async (req, res) => {
//   try {
//     const { executor, title, body, date, level_primary } = req.query;

//     const tasks = await Tasks.findAll({ where: { executor: executor } });

//     if (tasks) {
//       return res.status(400).json({ message: "Tasks with this executor not find" });
//     }

//     res.status(201).json({ message: "Register was succeshul" });
//   } catch (err) {
//     res.status(500).json({ message: "Вывалилась ошибка", err: err });
//   }
// });

module.exports = router;
