const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    connection: null,
    promise: null,
  };
}

const connectToDatabase = async () => {
  if (cached.connection) {
    return cached.connection;
  }

  const opts = {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 10000,
  };

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URI, opts)
      .then((mongooseInstance) => {
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }
  
  cached.connection = await cached.promise; 
  return cached.connection;
};

module.exports = connectToDatabase;