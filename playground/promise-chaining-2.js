require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("5f638204b67296cd78950faf")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
