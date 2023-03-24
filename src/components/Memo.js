import React, { useRef, useState } from 'react'

const Memo = () => {


  const [count, setCount] = useState(0);
  console.log(count,"state")
  let x = 0;
  
  let y = useRef(0)
  
  return (
    <div>
      <h1>State : {count} </h1><button onClick={() => setCount(count + 1) }>Add</button>
      <h1>X : {x}</h1><button onClick={() => {
        x = x + 1
        console.log(x,"xxxx");
      }
      }>Add X</button>
      <h1>Y : {y.current}</h1><button onClick={() => {
        y.current = y.current + 1
        console.log(y.current, "yyy");
      }
      }>Add Y</button>
    </div>
  )
}

export default Memo