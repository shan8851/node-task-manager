//CRUD
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://localhost//127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }
    const db = client.db(databaseName);

    db.collection("users").insertOne(
      {
        _id: id,
        name: "Tony",
        age: 45,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result.ops);
      }
    );
    // db.collection("tasks").insertMany(
    //   [
    //     { task: "Write blog post", completed: true },
    //     { task: "Email MTC", completed: false },
    //     { task: "Hoover", completed: true },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to add users");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
