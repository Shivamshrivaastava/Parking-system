import mongoose from "mongoose";
const schema = new mongoose.Schema({
  ticketId: String,
  amount: Number,
  status: { type: String, enum: ["SUCCESS","FAILED"] }
});
export default mongoose.model("Payment", schema);