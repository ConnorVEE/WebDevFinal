import { Mongoose, ObjectId } from "mongoose"

export interface Task {
  _id: ObjectId,
  reminder: boolean,
  text: string,
  day: string
}
