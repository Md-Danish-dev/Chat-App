import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup=async (req,res)=>{
    try {
        const {fullName, username, password, confirmpassword, gender} =req.body;

        if(password!==confirmpassword){
            return res.status(400).json({error:"password don't match"})
        }

        const user = await User.findOne({username})

        if(user){
            return res.status(400).json({error:"Username already exist"})
        }
        
        // hashing password
        const salt= await bcrypt.genSalt(10)
        const hashedpassword= await bcrypt.hash(password,salt)

        // avatar generato
        const boyprofilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlprofilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const newUser=new User({
            fullName,
            username,
            password:hashedpassword,
            gender,
            profilePic: gender==="male"?boyprofilePic:girlprofilePic,
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        }else{
            res.status(500).json({error:"inavalid user data"})
        }
        
    } catch (error) {
        console.log('error in signup controller',error.message);
        res.status(500).json({error:"internal server error"})  
    }
}

export const login=async (req,res)=>{
    try {
        const {username,password}=req.body

        const user=await User.findOne({username})
        const isPasswordCorrect=await bcrypt.compare(password,user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"})
        }
        
        generateTokenAndSetCookie(user.id,res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePic:user.profilePic,
        })
        
    } catch (error) {
        console.log('error in login controller',error.message);
        res.status(500).json({error:"internal server error"})
    }
    
}

export const logout=async(req,res)=>{
   try {
        res.cookie('jwt','',{maxAge:0})
        res.status(200).json({message:"logout successfully"})
    
   } catch (error) {
        console.log('error in logout',error.message);
        res.status(500).json({error:"internal server error"})
   }
    
}