import React, { useCallback, useState } from "react";
import DemoChild from "./DemoChild";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
 
  const addCount = useCallback(() => {
    console.log("callback")
    setCount(count + 1)
  },[count])
  

  return (
    <div>
      <h1>Parent</h1>
      <h1>Count {count}</h1>
      <h1>Cart {cart}</h1>
      <button onClick={()=>setCart(cart + 1)}>add Cart</button>
      <DemoChild addCount={addCount} />
    </div>
  );
};

export default MyComponent;
