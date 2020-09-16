//CRUD

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://localhost//127.0.0.1:27017";
const databaseName = "task-manager";

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
        name: "Asam",
        age: 33,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result.ops);
      }
    );
  }
);
