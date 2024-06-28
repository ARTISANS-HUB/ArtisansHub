const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const username = process.env.MongoDbOnlineUsername;
const password = process.env.MongoDbOnlinePass;
const clusterName = 'cluster0';

const logger = require('../logger');

const onlinedbName = process.env.MongoDbOnlineDbname;

// MongoDB connection to Atlas
const url = `mongodb+srv://${username}:${password}@${clusterName}.uzkrp1a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,  // Adjust as needed
  socketTimeoutMS: 45000,  // Adjust as needed
  dbName: onlinedbName,  // Specify the database name here
})
  .then(() => {
    logger.log('info', '[' + new Date() + '] Connected to the database');
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    // Log error
    logger.log('error', '[' + new Date() + '] Error connecting to the database:', error);
    console.error('Error connecting to MongoDB:', error);
  });

// connectToDB function
async function connectToDB() {
  try {
    await mongoose.connection.asPromise(); // Ensure the connection is established
    return mongoose.connection; // Return the Mongoose connection
  } catch (error) {
    logger.log('error', '[' + new Date() + '] Error connecting to the database:', error);
    console.error('Error in connectToDB:', error);
  }
}

// closeDB function to work with Mongoose
function closeDB() {
  mongoose.connection.close()
    .then(() => {
      logger.log('info', '[' + new Date() + '] Connection to the database closed');
      console.log('Connection to the database closed');
    })
    .catch((error) => {
      logger.log('error', '[' + new Date() + '] Error closing the database connection:', error);
      console.error('Error closing the database connection:', error);
    });
}

// Export the modified functions
module.exports = { connectToDB, closeDB };

