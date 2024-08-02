import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded cursor-pointer p-2 py-1 ">
        <div className="avatar online w-12 rounded">
           <img src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
           alt="user avatar"/> 
        </div>


        <div className="flex flex-1">
            <p className='font-bold text-gray-200'>Md Danish</p>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1"></div>
    </>
  )
}

export default Conversation
