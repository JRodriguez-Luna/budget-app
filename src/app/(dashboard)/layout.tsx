import SideBar from '@/components/SideBar'
import React from 'react'

const layout = ({ children }:  {children: React.ReactNode}) => {
  return (
    <div>
        <SideBar />
        {children}
    </div>
  )
}

export default layout