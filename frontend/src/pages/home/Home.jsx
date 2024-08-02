import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from '../../components/Messages/MessageContainer';

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[600px]  p-6 rounded-lg shadow-md overflow-hidden bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer/>
    </div>
  )
}

export default Home;