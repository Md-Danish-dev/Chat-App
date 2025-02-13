import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";

export const sendMessage = async (req, res) => {
  
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation=await Conversation.findOne({
      parcipants:{$all:[senderId,receiverId]},
    })

    if(!conversation){
      conversation=await Conversation.create({
        participants:[senderId,receiverId],
      })
    }
      const newMessage=new Message({
        senderId,
        receiverId,
        message
      })

      if(newMessage){
        conversation.messages.push(newMessage._id)
      }

      // socket io functionality

      // await conversation.save()
      // await newMessage.save()

      //this will run in parallel
      await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage)

      
  } catch (error) {
    console.log("error in sendMessage", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};



export const getMessages= async (req,res)=>{
 try {
   const {id:userToChatId}=req.params;
   const senderId=req.user._id

  console.log("senderId",senderId);
  console.log("userToChatId",userToChatId);
  
   const conversation=await Conversation.findOne({
    participants:{$all:[senderId,userToChatId]},
   }).populate("messages")    //not refrence but actual messages

   console.log("conversation",conversation);

   if(!conversation) return res.status(200).json([])
    const messages=conversation.messages;
  res.status(200).json(messages)
   
  console.log("messages",messages);

 } catch (error) {
  console.log("error in getMessages controller", error.message);
  res.status(500).json({ error: "internal server error" });
 }

}
