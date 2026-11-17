import React from 'react'
import Navbar from './Navbar'
import Left_content from './Main_content.jsx/Left_content'
import Right_content from './Main_content.jsx/Right_content'
import Allcontent from './Main_content.jsx/Allcontent'

const Section_1 = ({cards}) => {
  return (
    <div className='h-screen w-full flex flex-col p-4' >
      <Navbar />
      <Allcontent cards={cards}/>
    </div>
  )
}

export default Section_1 
