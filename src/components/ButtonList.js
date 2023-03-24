import React from 'react'
import Button from './Button'

const list = ["All", "Trending", "Vijay", "str", "Dhanush", "Rajini", "Sports", "Ronaldo", "Messi", "Reviews", "cr7",
              "suriya", "Raja","neymar","leo"]

const ButtonList = () => {
  return (
      <div  className="flex">
          {
              list.map((name,i) => (
                  <Button key={i} name={name} />
              ))
          }
    </div>
  )
}

export default ButtonList