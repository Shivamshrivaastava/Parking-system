import mongoose from "mongoose";
const schema = new mongoose.Schema({
  slotNumber: { type: String, unique: true },
  isAvailable: { type: Boolean, default: true }
});
export default mongoose.model("ParkingSlot", schema);