//CRUD
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://localhost//127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to the database");
    }
    const db = client.db(databaseName);

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("5f628806e984c13eec94e6ef") },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch(() => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .updateMany(
        {},
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
