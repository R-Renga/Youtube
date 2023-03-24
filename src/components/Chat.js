import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomComments, generateRandomName } from "../utils/helper";
import LiveChat from "./LiveChat";

const Chat = () => {
  const [sendMessage, setSendMessage] = useState("");
  const dispatch = useDispatch();
  const chatResult = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComments(20) + "😍",
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  // function chatting(e){
  //   e.preventDefault()
  //   dispatch(addMessage({
  //     name: "RengaRaja",
  //     message: sendMessage
  //   }))
  //   setSendMessage("")
  // }
  return (
    <>
      <div className="px-2 mx-2  border h-[600px] w-full border-gray-500 bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse">
        {chatResult.map((data, index) => (
          <LiveChat name={data.name} message={data.message} key={index} />
        ))}
      </div>
      <form
        className="px-2 mx-2 w-full flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "RengaRaja",
              message: sendMessage,
            })
          );
          setSendMessage("")
        }}
      >
        <input
          type="text"
          className="px-2 w-80 h-12 border border-black"
          value={sendMessage}
          onChange={(e) => setSendMessage(e.target.value)}
        />
        <button className="px-8 m-2 bg-green-200" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default Chat;
