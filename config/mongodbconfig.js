const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.MongoDbOnlineUsername;
const password = process.env.MongoDbOnlinePass;
const clusterName = "cluster0";

const logger = require("../logger");
//offline db
const dbName = process.env.dbNameOffline;
const onlinedbName = process.env.MongoDbOnlineDbname;
// MongoDB connection to local URL
//const url = 'mongodb://localhost:27017/'+dbName;
//eyhty
//uzkrp1a
const url = `mongodb+srv://${username}:${password}@${clusterName}.uzkrp1a.mongodb.net/${onlinedbName}?retryWrites=true&w=majority`;

// Create a Mongoose connection
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Adjust as needed
    socketTimeoutMS: 45000, // Adjust as needed
  })
  .then(() => {})
  .catch((error) => {
    //log error
    logger.log(
      "error",
      "[" + Date() + "Error connecting to the database:",
      error
    );
  });

// connectToDB
async function connectToDB() {
  try {
    return mongoose.connection; // Return the Mongoose connection
  } catch (error) {
    logger.log(
      "error",
      "[" + Date() + "Error connecting to the database:",
      error
    );
  }
}

// closeDB function to work with Mongoose
function closeDB() {
  // Close the Mongoose connection when you're done
  mongoose.connection
    .close()
    .then(() => {
      logger.log("error", "[" + Date() + "Connection to the database closed");
    })
    .catch((error) => {
      logger.log(
        "error",
        "[" + Date() + "Error closing the database connection:",
        error
      );
    });
}

// Export the modified functions
module.exports = { connectToDB, closeDB };
