import mongoose from "mongoose";
const schema = new mongoose.Schema({
  ticketId: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vehicleNumber: String,
  slotId: { type: mongoose.Schema.Types.ObjectId, ref: "ParkingSlot" },
  entryTime: Date,
  exitTime: Date,
  totalAmount: Number,
  isPaid: { type: Boolean, default: false }
});
export default mongoose.model("ParkingTicket", schema);