import { Schema, model, models } from "mongoose"

const MessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
)

export const Message = models.Message || model("Contact", MessageSchema)
