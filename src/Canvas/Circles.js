import React from 'react'
import Circle from './Circle'

const Circles = ({circles}) => {
  return (
    <div>
      {
        circles?.map(c=>(
            <Circle key={c?.id} {...c}/>
        ))
      }
    </div>
  )
}

export default Circles
