import React from "react";

const LiveChat = ({ name, message }) => {
    console.log(name, "name")
  return (
    <div className="flex items-center shadow-sm">
        <img
          className="h-8 my-2 px-2"
          alt="usericon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVwuZ5A2-mFMGxZOo0qVI82JJq4aEvab83hwOxbsaPT0tlO9-cLHI7esrkLM7tkjMDW-oCO7CYQ8&usqp=CAU&ec=48600113"
        />
        <span className="px-2 font-bold">{name}</span>
        <span className="">{message}</span>
      </div>    
  );
};

export default LiveChat;
