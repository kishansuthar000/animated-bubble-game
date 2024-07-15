import React from 'react'

const Controls = ({ hasCircles,hasHistory, OnUndo,OnRedo,onReset}) => {
  return (
    <div className='controls' onClick={(e)=>{e.stopPropagation()}}>
      <button 
      disabled={!hasCircles}
      className={`${hasCircles ? "" : "disabled"}`}
      onClick={OnUndo}
      >
        Undo
        </button>
      <button 
      disabled={!hasHistory}
      className={`${hasHistory ? "" : "disabled"}`}
      onClick={OnRedo}
      >
        Redo
        </button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Controls
