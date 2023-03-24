import React, { useEffect, useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);
  // const[prime,setPrime] = useState(null)

  // useEffect(() => {
  //     const result = findPrime(text);
  //     setPrime(result)
  // },[text])

  const prime = useMemo(() => findPrime(text), [text]);
  

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDark && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="p-2 m-2 bg-green-200"
          onClick={() => {
            setIsDark(!isDark);
          }}
        >
          Toggle
        </button>
      </div>
      <div className="box-border">
        <input
          type="number"
          className="p-2 m-2 border border-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1>prime : {prime} </h1>
      </div>
    </div>
  );
};

export default Demo;
