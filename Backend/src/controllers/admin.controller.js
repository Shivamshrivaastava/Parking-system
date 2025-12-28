import User from "../models/User.js";
import ParkingTicket from "../models/ParkingTicket.js";

export const stats=async(req,res)=>{
  const users=await User.countDocuments();
  const tickets=await ParkingTicket.countDocuments();
  res.json({users,tickets});
};