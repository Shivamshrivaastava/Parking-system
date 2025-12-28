import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register=async(req,res)=>{
  const hashed=await bcrypt.hash(req.body.password,10);
  const user=await User.create({...req.body,password:hashed});
  res.status(201).json(user);
};

export const login=async(req,res)=>{
  const user=await User.findOne({email:req.body.email});
  if(!user) return res.status(400).json({message:"Invalid"});
  const ok=await bcrypt.compare(req.body.password,user.password);
  if(!ok) return res.status(400).json({message:"Invalid"});
  const token=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET);
  res.json({token});
};