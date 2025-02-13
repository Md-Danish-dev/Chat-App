import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation,lastidx}) => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id===conversation._id;

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer p-2 py-1 ${isSelected? 'bg-sky-500':""}`} 
      onClick={()=>setSelectedConversation(conversation)}>
        <div className="avatar online w-12 rounded">
           <img src={conversation.profilePic}
           alt="user avatar"/> 
        </div>


        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            </div>
        </div>
      </div>

      {!lastidx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  )
}

export default Conversation
