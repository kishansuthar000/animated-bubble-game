import React, { useState } from 'react'
import { COLORS } from '../constant';
import Circles from './Circles';
import Controls from './Controls';

export const Canvas = () => {
    const [circles,setCircles] = useState([]);
    const [history,setHistory] = useState([]);


    const handelClicked=(e)=>{
        setCircles((prev)=> {
            return [
             ...prev,
            {
               x:e.clientX,
               y:e.clientY,
               id: + new Date(),
               bgColor:getBgColor()
            }
        ]
        })
    }

    const getBgColor = ()=>{
        let ind = Math.floor(Math.random() * COLORS.length)
        return COLORS[ind];
    }

    const onUndo = ()=>{
         let copy = [...circles];
         let lastEle = copy.pop();
         setHistory((prev)=>[...prev,lastEle]);
         setCircles(copy);
    }

    const onRedo = ()=>{
        let copy = [...history];
        let lastEle = copy.pop();
        setCircles((prev)=>[...prev,lastEle]);
        setHistory(copy);
   }
  
   const onReset = ()=>{
    setCircles([]);
    setHistory([]);

   }

   console.log(circles)

  return (
    <div className='canvas' onClick={handelClicked}>
       <Circles circles={circles}/>
       <Controls 
       hasCircles={circles.length > 0}
       hasHistory = {history.length > 0 }
       OnUndo={onUndo}
       onReset={onReset}
       OnRedo={onRedo}
       />
    </div>
  )
}
