import React from 'react'
import Navbar_2 from './Navbar_2'
import Left_2 from './Main_con2.jsx/Left_2'
import Right_2 from './Main_con2.jsx/Right_2'

const section_2 = () => {
  return (
    <div className='h-screen w-full '>
      <Navbar_2 />
      <div className='flex gap-4 p-3'>
        <Left_2 />
        <Right_2 />
      </div>

    </div>
  )
}

export default section_2
