import Payment from "../models/Payment.js";
export const pay=async(req,res)=>{
  const payment=await Payment.create({
    ticketId:req.body.ticketId,
    amount:req.body.amount,
    status:"SUCCESS"
  });
  res.json(payment);
};