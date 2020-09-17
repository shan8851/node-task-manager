const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

// const me = new User({
//   name: "Asam",
//   age: 33,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const blog = new Task({
  description: "Write new blog post",
  completed: false,
});

blog
  .save()
  .then(() => {
    console.log(blog);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
