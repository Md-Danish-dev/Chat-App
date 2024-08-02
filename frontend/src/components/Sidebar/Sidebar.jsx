import React from 'react'
import SearchInput from './SearchInput'
import Conversationlist from './Conversationlist'
import LogoutButton from './LogoutButton'

const Sidebar=()=> {
  return (
    <div>
        <SearchInput />
        <div className="divider px-1"></div>
        <Conversationlist />
        <LogoutButton/>
    </div>
  )
}

export default Sidebar