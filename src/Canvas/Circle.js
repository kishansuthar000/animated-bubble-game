import React from 'react'

const Circle = ({x,y,bgColor}) => {
  return (
    <div 
    className='circle'
    style={{
        backgroundColor:bgColor,
        top:`${y - 24}px`,
        left:`${x - 24}px`,
        }}>
      
    </div>
  )
}

export default Circle
