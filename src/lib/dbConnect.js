//   // import mongoose from "mongoose";

//   // const connection={}

//   // export async function dbConnect(){
//   //   if(connection.isConnected){
//   //     console.log('Already Connected to the Database');
//   //     return;
//   //   }
//   //   try {
//   //     const db=await mongoose.connect(process.env.MONGODB_URI ||"",{});
//   //     connection.isConnected=db.connections[0].readyState
//   //     console.log("Connection Successfull")
//   //   } catch (error) {
//   //     console.log('Database Connection failed',error)
//   //     process.exit(1)
//   //   }
//   // }


//   import mongoose from 'mongoose';

//   const MONGODB_URI = process.env.MONGODB_URI;
  
//   // Temporary debug log
//   console.log('MONGODB_URI:', MONGODB_URI);
  
//   if (!MONGODB_URI) {
//     throw new Error(
//       'Please provide the MONGODB_URI environment variable inside .env.local'
//     );
//   }

// /**
//  * Global is used here to maintain a cached connection across
//  * hot reloads in development. This prevents connections from
//  * growing exponentially during API Route usage.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;


import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;


