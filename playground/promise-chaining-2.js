require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f638204b67296cd78950faf")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteAndCount = async (id) => {
  const taskToDelete = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  return count;
};

deleteAndCount("5f6381085a9cc2cc626df0f1")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
