import ParkingSlot from "../models/ParkingSlot.js";
import ParkingTicket from "../models/ParkingTicket.js";
import { v4 as uuid } from "uuid";
import { PRICE_PER_HOUR } from "../config/pricing.js";

export const park=async(req,res)=>{
  const slot=await ParkingSlot.findOne({isAvailable:true});
  if(!slot) return res.status(400).json({message:"No slots"});
  slot.isAvailable=false;
  await slot.save();

  const ticket=await ParkingTicket.create({
    ticketId:uuid(),
    userId:req.user.id,
    vehicleNumber:req.body.vehicleNumber,
    slotId:slot._id,
    entryTime:new Date()
  });

  res.json(ticket);
};

export const exit=async(req,res)=>{
  const ticket=await ParkingTicket.findOne({ticketId:req.params.id});
  ticket.exitTime=new Date();

  const hours=Math.ceil((ticket.exitTime-ticket.entryTime)/(1000*60*60));
  ticket.totalAmount=hours*PRICE_PER_HOUR;
  await ticket.save();

  await ParkingSlot.findByIdAndUpdate(ticket.slotId,{isAvailable:true});

  res.json(ticket);
};