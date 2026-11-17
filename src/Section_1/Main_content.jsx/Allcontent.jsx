import React from 'react'
import Left_content from './Left_content'
import Right_content from './Right_content'

const Allcontent = ({cards}) => {
  return (
    <div className='flex justify-between items-center gap-2 h-screen'>
      <Left_content/>
      <Right_content cards={cards}/>
    </div>
  )
}

export default Allcontent
