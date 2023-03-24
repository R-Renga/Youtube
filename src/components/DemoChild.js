import React from 'react'
import { memo } from 'react'

const DemoChild = ({addCount}) => {
    console.log("child rendering")
  return (
      <div>
          <h1>child</h1>
          <button onClick={addCount}>Increase Count</button>
      </div>
      
  )
}

export default memo(DemoChild)