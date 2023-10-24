import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  { collection: "tickets", timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
