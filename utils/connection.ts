import mongoose, { Model } from "mongoose"

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
// const { DATABASE_URL } = process.env

export const connect = async () => {
    const conn = await mongoose
      .connect(process.env.DATABASE_URL as string)
      .then(() => console.log("Mongoose Connection Established"))
      .catch(err => console.log(err))
    
  
    // OUR TODO SCHEMA
    const TodoSchema = new mongoose.Schema({
      item: String,
      completed: Boolean,
    })
  
    // OUR TODO MODEL

    const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema)
  
    return { conn, Todo }
  }

  